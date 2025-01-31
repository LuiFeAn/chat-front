import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import IMessage from "./interfaces/messages.interface";
import { v4 } from "uuid";
import { usePromptService } from "./chat-input/chat.service";

export const useCentralAreaController = () => {
  const { id } = useParams();

  const { sendPrompt } = usePromptService();

  const [messages, setMessages] = useState<IMessage[]>([]);

  const [promp, setPrompt] = useState("");

  const [sendingPrompt, setSedingingPrompt] = useState<boolean>(false);

  const Nav = useNavigate();

  const handleAddNewMessages = (message: string, byUser: boolean = true) =>
    setMessages((prevState) => [
      ...prevState,
      {
        content: message,
        byUser,
      },
    ]);

  const handlePrompCommand = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setPrompt(event.target.value);

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (promp.length > 1 && event.key === "Enter" && !event.shiftKey) {
      if (!id) {
        Nav(`/${v4()}`);
      }

      setSedingingPrompt(true);

      handleAddNewMessages(promp);

      setPrompt("");

      try {
        const response = await sendPrompt(promp);

        handleAddNewMessages(response, false);
      } catch {
        handleAddNewMessages(
          "Ops! parece que não estou conectado a nenhuma API no momento.",
          false
        );
      }

      setSedingingPrompt(false);
    }
  };

  useEffect(() => {}, []);

  return {
    id,
    promp,
    sendingPrompt,
    messages,
    handlePrompCommand,
    handleKeyDown,
  };
};
