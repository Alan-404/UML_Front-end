import React from "react";
import Header from "./Header";
import Dashboard from "../components/home/Dashboard";
import Footer from "./Footer";
import "./HomeView.css";
const HomeView = () => {
  return (
    <div className="container-xs bg">
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default HomeView;
