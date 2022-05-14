import React from "react";
import Header from "./Header";
import Dashboard from "../components/home/Dashboard";
import Footer from "./Footer";
import "./HomeView.css";
import Menu from "../components/home/Menu";
import ShowProduct from "../components/home/ShowProduct";
import Profile from "../components/home/Profile";
const HomeView = ({homeRoute}) => {
  let body = (
    <div>
      {homeRoute === 'dashboard' && <Dashboard />}
      {homeRoute === 'product' && <ShowProduct />}
      {homeRoute === 'profile' && <Profile />}
    </div>
  )
  return (
    <div className="container-xs bg">
      <Header />
      {body}
      <Footer />
    </div>
  );
};

export default HomeView;
