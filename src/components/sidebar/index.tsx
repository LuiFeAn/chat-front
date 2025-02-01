import { useSideBarController } from "./controller";
import { Chats } from "./components/chats";
import { SideBarIcons } from "./components/icons";

export const SideBar = () => {
  const { handleOnClickMenu, handleAsidePosition, isMenuOpen } =
    useSideBarController();

  return (
    <aside
      className={`bg-[#171717] pl-2 pt-2  transition-all h-screen ${handleAsidePosition()}`}
    >
      <SideBarIcons onClickMenu={handleOnClickMenu} />
      <Chats open={isMenuOpen} />
    </aside>
  );
};
