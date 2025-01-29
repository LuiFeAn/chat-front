import { CentralArea } from "../../components/central-area";
import { Header } from "../../components/header";
import { SideBar } from "../../components/sidebar";

export const Home = () => {
  return (
    <main className="w-full flex justify-around">
      <SideBar />
      <div className="w-full">
        <Header />
        <CentralArea />
      </div>
    </main>
  );
};
