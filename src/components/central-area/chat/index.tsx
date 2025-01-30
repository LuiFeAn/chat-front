import IMessage from "../interfaces/messages.interface";

interface Props {
  chatId?: string;
  messages: IMessage[];
}
export const Chat = ({ chatId, messages }: Props) => {
  return (
    <>
      {messages.length > 0 && (
        <div className="w-full h-[100%] overflow-auto mt-20">
          {chatId && (
            <>
              {messages.map((message) => (
                <>
                  {message.byUser && (
                    <div className="flex justify-end p-2">
                      <p className="inline-block bg-blue-500 max-w-[50%] text-white p-2 rounded-xl mr-28">
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
