import { Routes, Route } from "react-router-dom";
import Login from "../components/login";
import Register from "../components/register";

const AppLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
export default AppLayout;
