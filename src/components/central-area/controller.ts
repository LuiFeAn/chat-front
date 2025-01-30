import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import IMessage from "./interfaces/messages.interface";

export const useCentralAreaController = () => {
  const { id } = useParams();

  const [messages, setMessages] = useState<IMessage[]>([]);

  const [promp, setPrompt] = useState("");

  const handleAddNewMessages = (message: string) =>
    setMessages((prevState) => [
      ...prevState,
      {
        content: message,
      },
    ]);

  const handlePrompCommand = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setPrompt(event.target.value);

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter" && !event.shiftKey) {
      handleAddNewMessages(promp);
      setPrompt("");
    }
  };

  useEffect(() => {}, []);

  return {
    id,
    promp,
    messages,
    handlePrompCommand,
    handleKeyDown,
  };
};
