import IMessage from "../interfaces/messages.interface";

interface Props {
  chatId?: string;
  messages: IMessage[];
}
export const Chat = ({ chatId, messages }: Props) => {
  return (
    <>
      {chatId && (
        <div>
          {messages.map((message) => (
            <p>{message.content}</p>
          ))}
        </div>
      )}
    </>
  );
};
