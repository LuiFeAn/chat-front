import { useEffect } from "react";

interface Props {
  chatId?: string;
}
export const CentralAreaChat = ({ chatId }: Props) => {
  useEffect(() => {}, [chatId]);
};
