'use client';
import { trpc } from '@/app/_trpc/client';
import { INFINITE_QUERY_LIMIT } from '@/config/infinite-query';
import { useMutation } from '@tanstack/react-query';
import { ChangeEvent, createContext, useRef, useState } from 'react';
import { toast } from '../ui/use-toast';
import { cleanString } from '@/lib/utils';

type StreamResponse = {
  addMessage: () => void;
  message: string;
  handleInputChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  isLoading: boolean;
};

export const ChatContext = createContext<StreamResponse>({
  addMessage: () => {},
  message: '',
  handleInputChange: () => {},
  isLoading: false,
});

export const ChatContextProvider = ({
  children,
  fileId,
}: {
  children: React.ReactNode;
  fileId: string;
}) => {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const backupMessage = useRef('');

  const { mutate: sendMessage } = useMutation({
    mutationFn: async ({ message }: { message: string }) => {
      const res = await fetch('/api/message', {
        method: 'POST',
        body: JSON.stringify({ message, fileId }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error('Failed to send message');
      }
      return res.body; // Assuming you want to return the JSON response
    },

    onMutate: async ({ message }) => {
      backupMessage.current = message;
      setMessage('');

      await utils.getFileMessages.cancel();

      const previousMessages = utils.getFileMessages.getInfiniteData();

      utils.getFileMessages.setInfiniteData(
        {
          fileId,
          limit: INFINITE_QUERY_LIMIT,
        },
        (oldData) => {
          if (!oldData)
            return {
              pages: [],
              pageParams: [],
            };

          let newPages = [...oldData.pages];

          let latestPage = newPages[0];

          latestPage.messages = [
            {
              id: crypto.randomUUID(),
              isUserMessage: true,
              content: message,
              createdAt: new Date().toISOString(),
            },
            ...latestPage.messages,
          ];

          newPages[0] = latestPage;

          return {
            ...oldData,
            pages: newPages,
          };
        }
      );

      setIsLoading(true);

      return {
        previousMessages:
          previousMessages?.pages.flatMap((page) => page.messages) ?? [],
      };
    },
    onSuccess: async (stream) => {
      setIsLoading(false);

      if (!stream) {
        return toast({
          title: 'There was a problem sending this message',
          description: 'Please refresh this page and try again',
          variant: 'destructive',
        });
      }

      const reader = stream.getReader();
      const decoder = new TextDecoder();
      let done = false;

      // accumulated response
      let accResponse = '';

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value, { stream: true });
        console.log(accResponse);

        accResponse += cleanString(chunkValue);

        // append chunk to the actual message
        utils.getFileMessages.setInfiniteData(
          { fileId, limit: INFINITE_QUERY_LIMIT },
          (oldData) => {
            if (!oldData) return { pages: [], pageParams: [] };

            let isAiResponseCreated = oldData.pages.some((page) =>
              page.messages.some((message) => message.id === 'ai-response')
            );

            let updatedPages = oldData.pages.map((page) => {
              if (page === oldData.pages[0]) {
                let updatedMessages;

                if (!isAiResponseCreated) {
                  updatedMessages = [
                    {
                      createdAt: new Date().toISOString(),
                      id: 'ai-response',
                      content: accResponse,
                      isUserMessage: false,
                    },
                    ...page.messages,
                  ];
                } else {
                  updatedMessages = page.messages.map((message) => {
                    if (message.id === 'ai-response') {
                      return {
                        ...message,
                        content: accResponse,
                      };
                    }
                    return message;
                  });
                }

                return {
                  ...page,
                  messages: updatedMessages,
                };
              }

              return page;
            });

            return { ...oldData, pages: updatedPages };
          }
        );
      }
    },
    onError: (_, __, context) => {
      setMessage(backupMessage.current);
      utils.getFileMessages.setData(
        { fileId },
        { messages: context?.previousMessages ?? [] }
      );
    },
    onSettled: async () => {
      setIsLoading(false);
      setMessage('');
    },
  });

  const utils = trpc.useUtils();

  const addMessage = () => {
    sendMessage({ message });
  };

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };
  return (
    <ChatContext.Provider
      value={{
        addMessage,
        message,
        handleInputChange,
        isLoading,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
