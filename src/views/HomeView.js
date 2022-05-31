import React from "react";
import Header from "./Header";
import Dashboard from "../components/home/Dashboard";
import Footer from "./Footer";
import "./HomeView.css";
import Menu from "../components/home/Menu";
import Manager from "../components/home/Manager";
import ShowProduct from "../components/home/ShowProduct";
import Profile from "../components/home/Profile";
import EditProfile from "../components/home/EditProfile";
import AddProduct from "../components/home/AddProduct";
import SearchScreen from "../components/home/SearchScreen";
const HomeView = ({homeRoute}) => {
  let body = (
    <div>
      {homeRoute === 'dashboard' && <Dashboard />}
      {homeRoute === 'product' && <ShowProduct />}
      {homeRoute === 'manager' && <Manager types_table={["Product","User"]} />}
      {homeRoute === 'manager_user' && <Manager types_table={["Cart","Orders"]} />}
      {homeRoute === 'profile' && <Profile />}
      {homeRoute === 'add_product' && <AddProduct />}
      {homeRoute === 'menu' && <Menu />}
      {homeRoute === 'edit_profile' && <EditProfile />}
      {homeRoute === 'search_product' && <SearchScreen />}
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
