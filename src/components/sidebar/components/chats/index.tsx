import { useChatsController } from "./controller";

interface Props {
  open: boolean;
}
export const Chats = ({ open }: Props) => {
  const { chats, handleOnClickChat } = useChatsController();

  return (
    <>
      {open && (
        <div className="mt-16">
          <ul>
            {chats.map((chat) => (
              <li
                onClick={() => handleOnClickChat(chat.id)}
                className="mt-2 hover:bg-black text-white cursor-pointer p-1 text-sm select-none"
              >
                {chat.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
