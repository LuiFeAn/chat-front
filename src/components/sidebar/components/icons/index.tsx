import { Menu, MessageCircleMore, Search } from "lucide-react";

interface Props {
  onClickMenu(): void;
}

export const SideBarIcons = ({ onClickMenu }: Props) => {
  return (
    <div className="flex justify-between items-center mt-2 relative">
      <Menu
        onClick={onClickMenu}
        size={25}
        className="animate-pulse cursor-pointer absolute"
        color="black"
      />
      <div className="flex gap-4 mr-4 w-full justify-end">
        <Search size={20} className="cursor-pointer" />
        <MessageCircleMore size={20} className="cursor-pointer" />
      </div>
    </div>
  );
};
