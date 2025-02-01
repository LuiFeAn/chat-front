import { Routes, Route } from "react-router";
import { Home } from "../pages/home";
import { Chat } from "../pages/chat";

export const ApplicationRoutes = () => {
  return (
   <div className="bg-[#212121]">
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Chat />} />
    </Routes>
    </div>
  );
};
