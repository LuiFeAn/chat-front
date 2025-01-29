import { chatsMock } from "./mock";
import { useNavigate } from "react-router";
export const useChatsController = () => {
  const Nav = useNavigate();

  const handleOnClickChat = (id: string) => Nav(`/${id}`);

  return {
    chats: chatsMock,
    handleOnClickChat,
  };
};
