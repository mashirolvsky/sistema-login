import { Login } from "./Pages/Login";
import { Delete } from "./Pages/Delete";
import { Home } from "./Pages/Home";
import { Create } from "./Pages/Create";
import { Edit } from "./Pages/Edit";
import { List } from "./Pages/List";

// React-Router-Dom
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/list" element={<List />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit" element={<Edit />} />
      <Route path="/delete" element={<Delete />} />
    </Routes>
  );
};
