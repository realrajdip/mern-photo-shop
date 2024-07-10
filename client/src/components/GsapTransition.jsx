import {
  Home,
  Signup,
  Login,
  BuyerDashboard,
  SellerDashboard,
} from "../pages/index.js";
import { Routes, Route, useLocation } from "react-router-dom";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import  {Toaster} from 'react-hot-toast'

const GsapTransition = () => {
  const nodeRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    gsap.fromTo(nodeRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });
  }, [location]);

  return (
    <div ref={nodeRef}>
    <Toaster position="top-center" reverseOrder={false} />
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/buyer/profile" element={<BuyerDashboard />} />
        <Route path="/seller/profile" element={<SellerDashboard />} />
      </Routes>
    </div>
  );
};

export default GsapTransition;
