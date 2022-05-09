import React from "react";
import Header from "./Header";
import Dashboard from "../components/home/Dashboard";
import Footer from "./Footer";
import "./HomeView.css";
import Menu from "../components/home/Menu";
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
