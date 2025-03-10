import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import EventsPage from "../pages/EventsPage";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="eventPage" element={<EventsPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default MainLayout;
