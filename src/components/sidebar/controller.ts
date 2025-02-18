import { useState } from "react";
import { chatsMock } from "./components/chats/mock";

export const useSideBarController = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);

  const handleOnClickMenu = () => setIsMenuOpen((prevState) => !prevState);

  const handleAsidePosition = () => {
    if (!isMenuOpen) {
      return "w-[0%] bg-transparent border-none";
    }
    return "w-[15%] max-sm:w-[70%] max-sm:absolute left-0 border-sm";
  };

  return {
    isMenuOpen,
    handleOnClickMenu,
    chats: chatsMock,
    handleAsidePosition,
  };
};
