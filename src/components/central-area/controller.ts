import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import IMessage from "./interfaces/messages.interface";
import { v4 } from "uuid";
import { usePromptService } from "./chat-input/chat.service";

export const useCentralAreaController = () => {
  const { id } = useParams();
  const { sendPrompt } = usePromptService();
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [promp, setPrompt] = useState("");
  const [sendingPrompt, setSendingPrompt] = useState<boolean>(false);
  const [currentMessage, setCurrentMessage] = useState<string>("");

  const Nav = useNavigate();

  const handleAddNewMessages = (message: string, byUser: boolean = true) =>
    setMessages((prevState) => [
      ...prevState,
      {
        content: message,
        byUser,
      },
    ]);

  const handlePromptCommand = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setPrompt(event.target.value);

  const typeMessage = async (message: string) => {
    let typedMessage = "";
    for (let i = 0; i < message.length; i++) {
      typedMessage += message[i];
      setCurrentMessage(typedMessage);
      await new Promise((resolve) => setTimeout(resolve, 50));
    }
    setMessages((prevState) => [
      ...prevState,
      {
        content: typedMessage,
        byUser: false,
      },
    ]);
    setCurrentMessage("");
  };

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (promp.length > 1 && event.key === "Enter" && !event.shiftKey) {
      if (!id) {
        Nav(`/${v4()}`);
      }

      event.preventDefault();
      setSendingPrompt(true);

      handleAddNewMessages(promp);
      setPrompt("");

      try {
        const response = await sendPrompt(promp);
        await typeMessage(response);
      } catch {
        handleAddNewMessages(
          "Ops! parece que não estou conectado a nenhuma API no momento.",
          false
        );
      }

      setSendingPrompt(false);
    }
  };

  useEffect(() => {}, [currentMessage]);

  return {
    id,
    promp,
    sendingPrompt,
    messages,
    currentMessage,
    handlePromptCommand,
    handleKeyDown,
  };
};
