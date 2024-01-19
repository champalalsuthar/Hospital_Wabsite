import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/NavBar2.css";
import {  NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { HashLink } from "react-router-hash-link";

function NavBar2() {
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  // const handleBtnClick = () => {
  //   if (!isButtonDisabled) {
  //     toast.info("Experiencing high traffic, Please wait a moment.", {
  //       // position: toast.POSITION.TOP_CENTER,
  //       onOpen: () => setIsButtonDisabled(true),
  //       onClose: () => setIsButtonDisabled(false),
  //     });
  //   }
  // };
  return (
    <div className="navbar-section ">
      <h1 className="navbar-title">
        <HashLink to="/#">
          Rk Clinic
        </HashLink>
      </h1>

      <ul className="navbar-items">
        <li>
          <NavLink className="navbar-links" to="/">Home</NavLink>
        </li>

        <li>
          <NavLink className="navbar-links" to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink className="navbar-links" to="/doctors">Doctors</NavLink>
        </li>

        <li>
          <NavLink className="navbar-links" to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/bookappointment#">  <button href="/bookappointment" className="navbar-btn"
            type="button"
            disabled={isButtonDisabled}
            // onClick={handleBtnClick}
          >BOOK APPOINTMENT</button> </NavLink>
        </li>
      </ul>

      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <a onClick={openNav} href="/">
              Home
            </a>
          </li>
          <li>
            <a onClick={openNav} href="/services">
              Services
            </a>
          </li>
          <li>
            <a onClick={openNav} href="/doctors">
              Doctors
            </a>
          </li>
          <li>
            <a onClick={openNav} href="/contact">
              Contact
            </a>
          </li>

        </ul>
        <li>
          <NavLink to="/bookappointment">  <button href="/bookappointment" className="mobile-navbar-btn"
            type="button"
            disabled={isButtonDisabled}
            // onClick={handleBtnClick} 
            onClick={openNav}
          >BOOK APPOINTMENT</button> </NavLink>
        </li>
      </div>

      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default NavBar2;