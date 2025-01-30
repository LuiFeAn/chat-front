import { useEffect } from "react";

interface Props {
  chatId?: string;
}
export const useCentralAreaChatController = ({ chatId }: Props) => {
  useEffect(() => {}, [chatId]);
};
