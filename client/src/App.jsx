import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import GsapTransition from "./components/GsapTransition.jsx";
import { Provider } from "react-redux";
import { store } from "../store/store.js";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <GsapTransition />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
