import { Outlet } from "react-router-dom";
import "./App.css";
import DishCard from "./Components/DishCard";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
