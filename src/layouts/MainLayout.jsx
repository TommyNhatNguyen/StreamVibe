import React from "react";
import Footer from "../components/Footer";
import { MainContextWrapper } from "../context/MainContext";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Modal from "../components/Modal";
import { Outlet } from "react-router-dom";
import { MovieContextWrapper } from "../context/MovieContext";
import { AuthContextWrapper } from "../context/AuthContext";

const MainLayout = ({ children }) => {
  return (
    <MainContextWrapper>
      <AuthContextWrapper>
        <MovieContextWrapper>
          <div className="page-wrapper">
            <Header />
            <Outlet />
            <Footer />
            <MobileMenu />
            <Modal />
          </div>
        </MovieContextWrapper>
      </AuthContextWrapper>
    </MainContextWrapper>
  );
};

export default MainLayout;
