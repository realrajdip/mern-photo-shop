import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import GsapTransition from "./components/GsapTransition.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <GsapTransition/>
    </BrowserRouter>
  );
};

export default App;
