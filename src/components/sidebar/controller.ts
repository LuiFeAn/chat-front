import { useState } from "react";
import { chatsMock } from "./components/chats/mock";

export const useSideBarController = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);

  const handleOnClickMenu = () => setIsMenuOpen((prevState) => !prevState);

  const handleAsidePosition = () => {
    if (!isMenuOpen) {
      return "w-[0%] bg-transparent";
    }
    return "w-[15%]";
  };

  return {
    isMenuOpen,
    handleOnClickMenu,
    chats: chatsMock,
    handleAsidePosition,
  };
};
