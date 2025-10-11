import React, { lazy } from "react";
import "./App.css";
<<<<<<< HEAD
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
=======
import { Routes, Route } from "react-router-dom";
>>>>>>> 4845d80ab9b6346c931380d9466e61e3746c6498
import Layout from "./components/Layout";
import AboutUs from "./pages/Aboutus";
import Join from "./pages/Join";
import Events from "./pages/Events";
import FaqPage from "./pages/Faq";
import Terms from "./pages/Terms";
import Policy from "./pages/Policy";
import Partner from "./pages/Partner";
import Contactus from "./pages/Contactus";

const Home = lazy(() => import("./pages/Home"));

export default function App() {
  return (
    <Routes>
      <Route path="/index.html" element={<Navigate to="/" />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/join" element={<Join />} />
        <Route path="/events" element={<Events />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/contact" element={<Contactus />} />
        
        
      </Route>
    </Routes>
  );
}
