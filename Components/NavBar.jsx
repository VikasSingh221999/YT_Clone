import React from "react";
import {
  FaBars,
  FaSearch,
  FaCamera,
  FaBell,
  FaMicrophone,
  FaUserNinja,
  FaHome,
  
} from "react-icons/fa";
import "./NavBar.css";

const NavBar = () => {
  const showNavBar = () => {
    navRef.current.classList.toggle("show");
  };

  return (
    <>
      <header>
        <div className="first-container">
        <button className="btn " type="button" > <FaBars/></button>
          <img className="img" src="Images/Logo.webp" alt="" />
        </div>

        <div className="second-container">
          <input type="text" placeholder="Search" className="search-bar" />
          <button className="search-btn">
            <FaSearch />
          </button>
          <button className="m-phn">
            <FaMicrophone />
          </button>
        </div>
        <div className="third-container">
          <button className="camera">
            <FaCamera />
          </button>
          <button className="bell">
            <FaBell />
          </button>
          <button className="user">
            <FaUserNinja />
          </button>
        </div>
      </header>




    <div className="sidebar"></div>
            <a href="#">
                    <FaHome/>
                </a>  
    </>
  );
};

export default NavBar;
