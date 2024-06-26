import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Signup,
  Login,
  BuyerDashboard,
  SellerDashboard,
} from "./pages/index.js";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/buyer/profile" element={<BuyerDashboard />} />
        <Route path="/seller/profile" element={<SellerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
