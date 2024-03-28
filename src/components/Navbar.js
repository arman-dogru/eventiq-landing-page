import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { IoCloseOutline } from "react-icons/io5";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobile]);
  return (
    <div className={isMobile ? "navbarfull" : "navbar"}>
      <button
        className="mobile-menu-icon"
        onClick={() => {
          setIsMobile(!isMobile);
        }}
      >
        {isMobile ? (
          <IoCloseOutline size={32} onClick={() => setIsMobile(!isMobile)} />
        ) : (
          <HiOutlineMenuAlt4 size={32} onClick={() => setIsMobile(!isMobile)} />
        )}
      </button>
      <div className="brand">
        <a href="/">
          <h1>Evntiq</h1>
        </a>
      </div>
      <div className={isMobile ? "navbar-mobile-menu" : "navbar-menu"}>
        <ul>
          <li onClick={() => setIsMobile(!isMobile)}>Home Page</li>
          <li onClick={() => setIsMobile(!isMobile)}>Classic</li>
          <li onClick={() => setIsMobile(!isMobile)}>Professional</li>
          <li onClick={() => setIsMobile(!isMobile)}>FAQ</li>
        </ul>
      </div>
      <button className="navbar-button">Sign In</button>
    </div>
  );
};

export default Navbar;
