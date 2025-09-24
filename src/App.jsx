import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Component/Layout/Navbar";
import Footer from "./Component/Layout/Footer";
import Login from "./Component/Layout/Login";
import Signup from "./Component/Layout/Signup";
import { ToastContainer } from "react-toastify";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [modalType, setModalType] = useState(null);

  const openLoginModal = () => setModalType("login");
  const openSignupModal = () => setModalType("signup");
  const closeModal = () => setModalType(null);
  const toggleModals = () => {
    if (modalType === "login") {
      setModalType("signup");
    } else {
      setModalType("login");
    }
  };

  return (
    <>
      <Navbar
        isAuthenticated={isAuthenticated}
        openLoginModal={openLoginModal}
        openSignupModal={openSignupModal}
      />

      {modalType === "login" && (
        <Login
          onClose={closeModal}
          setIsAuthenticated={setIsAuthenticated}
          toggleModals={toggleModals} 
        />
      )}

      {modalType === "signup" && (
        <Signup
          onClose={closeModal}
          setIsAuthenticated={setIsAuthenticated}
          toggleModals={toggleModals} 
        />
      )}

      <Outlet
        context={{
          isAuthenticated,
          setIsAuthenticated,
          openLoginModal,
          openSignupModal,
        }}
      />
      <Footer />
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default App;
