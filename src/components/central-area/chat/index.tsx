import IMessage from "../interfaces/messages.interface";
import { useCentralAreaChatController } from "./controller";

interface Props {
  chatId?: string;
  messages: IMessage[];
  currentMessage?: string;
}
export const Chat = ({ chatId, messages, currentMessage }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const controller = useCentralAreaChatController({
    chatId,
  });

  return (
    <>
      {messages.length > 0 && (
        <div className="w-full h-[100%] overflow-auto mt-20 p-20">
          {chatId && (
            <>
              {messages.map((message) => (
                <>
                  <div
                    className={`flex ${
                      message.byUser ? "justify-end" : "justify-start"
                    } p-2`}
                  >
                    <p
                      className={`inline-block bg-blue-500 max-w-[50%] text-white p-2 rounded-xl`}
                    >
                      {message.content}
                    </p>
                  </div>
                </>
              ))}
              {currentMessage && (
                <p
                  className={`inline-block bg-blue-500 max-w-[50%] text-white p-2 rounded-xl ml-[6px]`}
                >
                  {currentMessage}
                </p>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
};
