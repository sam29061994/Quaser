import { pinecone } from '@/lib/pinecone';
import prisma from '@/lib/prisma';
import { SendMessageValidator } from '@/lib/validators';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { PineconeStore } from '@langchain/pinecone';
import { NextRequest } from 'next/server';
import { OpenAIEmbeddings } from '@langchain/openai';
import { openAI } from '@/lib/openAI';
import { StreamingTextResponse, OpenAIStream } from 'ai';
import { ChatCompletionMessageParam } from 'openai/resources/index.mjs';

export const POST = async (req: NextRequest) => {
  const res = await req.json();

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) return new Response('Unauthorized', { status: 401 });

  const { id: userId } = user;

  const { fileId, message } = SendMessageValidator.parse(res);

  const file = await prisma.file.findFirst({
    where: {
      id: fileId,
      userId,
    },
  });

  if (!file) throw new Response('Not found', { status: 404 });

  await prisma.message.create({
    data: {
      fileId,
      userId,
      content: message,
      isUserMessage: true,
    },
  });

  const pineconeIndex = pinecone.Index('quasar');

  const embeddings = new OpenAIEmbeddings({
    openAIApiKey: process.env.OPENAI_API_KEY,
  });

  const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
    pineconeIndex,
    namespace: fileId,
  });

  const results = await vectorStore.similaritySearch(message, 4);

  const messages = await prisma.message.findMany({
    where: {
      fileId,
    },
    orderBy: {
      createdAt: 'asc',
    },
    take: 5,
  });

  const formattedMessages = messages.map((m) => ({
    role: m.isUserMessage ? ('user' as const) : ('assistant' as const),
    content: m.content,
  }));

  const prompt = [
    {
      role: 'system',
      content:
        'Use the following pieces of context (or previous conversaton if needed) to answer the users question in markdown format.',
    },
    {
      role: 'user',
      content: `Use the following pieces of context (or previous conversaton if needed) to answer the users question in markdown format. \nIf you don't know the answer, just say that you don't know, don't try to make up an answer.
        
  \n----------------\n
  
  PREVIOUS CONVERSATION:
  ${formattedMessages.map((message) => {
    if (message.role === 'user') return `User: ${message.content}\n`;
    return `Assistant: ${message.content}\n`;
  })}
  
  \n----------------\n
  
  CONTEXT:
  ${results.map((r) => r.pageContent).join('\n\n')}
  
  USER INPUT: ${message}`,
    },
  ];
  const response = await openAI.chat.completions.create({
    model: 'gpt-3.5-turbo',
    temperature: 0,
    stream: true,
    messages: prompt as ChatCompletionMessageParam[],
  });

  const stream = OpenAIStream(response, {
    async onCompletion(completed) {
      await prisma.message.create({
        data: {
          fileId,
          userId,
          content: completed,
          isUserMessage: false,
        },
      });
    },
  });

  return new StreamingTextResponse(stream);
};
