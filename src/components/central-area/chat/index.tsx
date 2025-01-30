import IMessage from "../interfaces/messages.interface";
import { useCentralAreaChatController } from "./controller";

interface Props {
  chatId?: string;
  messages: IMessage[];
}
export const Chat = ({ chatId, messages }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const controller = useCentralAreaChatController({
    chatId,
  });

  return (
    <>
      {messages.length > 0 && (
        <div className="w-full h-[100%] overflow-auto mt-20">
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
                      className={`inline-block bg-blue-500 max-w-[50%] text-white p-2 rounded-xl  ${
                        message.byUser ? "mr-28" : "ml-28"
                      }`}
                    >
                      {message.content}
                    </p>
                  </div>
                </>
              ))}
            </>
          )}
        </div>
      )}
    </>
  );
};
