import { useEffect, useState } from "react";

interface Props {
  chatId?: string;
}
export const useCentralAreaChatController = ({ chatId }: Props) => {
  const [chat, setChat] = useState({});

  useEffect(() => {}, [chatId]);
};
