import { Routes, Route } from "react-router";
import { Home } from "../pages/home";

export const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
