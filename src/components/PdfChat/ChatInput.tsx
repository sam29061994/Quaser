import { useContext, useRef } from 'react';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Send } from 'lucide-react';
import { ChatContext } from './ChatContext';

const ChatInput = ({ isDisabled }: { isDisabled: boolean }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { addMessage, message, handleInputChange, isLoading } =
    useContext(ChatContext);
  return (
    <div className='absolute bottom-0 left-0 w-full'>
      <div className='md:last-mb-6 mx-2 flex flex-row gap-3 md:mx-4 lg:mx-auto lg:max-w-2xl xl:max-w-3xl'>
        <div className='relative flex h-full flex-1 items-stretch md:flex-col'>
          <div className='relative flex w-full flex-grow flex-col p-4'>
            <div className='relative'>
              <Textarea
                rows={1}
                ref={textareaRef}
                onChange={handleInputChange}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    addMessage();
                    textareaRef.current?.focus();
                  }
                }}
                value={message}
                maxRows={4}
                autoFocus
                placeholder='Enter your request here ...'
                className='scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch resize-none py-3 pr-12 text-base'
              />
              <Button
                disabled={isDisabled || isLoading}
                aria-label='Send message'
                onClick={() => {
                  addMessage();
                  textareaRef.current?.focus();
                }}
                className='absolute bottom-1.5 right-[8px]'
              >
                <Send className='h-4 w-4' />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
