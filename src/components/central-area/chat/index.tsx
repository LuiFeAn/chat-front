import IMessage from "../interfaces/messages.interface";

interface Props {
  chatId?: string;
  messages: IMessage[];
}
export const Chat = ({ chatId, messages }: Props) => {
  return (
    <>
      {messages.length > 0 && (
        <div className="w-full h-[80%] overflow-auto">
          {chatId && (
            <>
              {messages.map((message) => (
                <>
                  {message.byUser && (
                    <div className="flex justify-end p-2">
                      <p className="inline-block bg-blue-500 text-white p-2 rounded-full mr-28">
                        {message.content}
                      </p>
                    </div>
                  )}
                </>
              ))}
            </>
          )}
        </div>
      )}
    </>
  );
};
