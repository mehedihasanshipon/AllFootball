import React from "react";
import { Navbar, Nav} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import navLogo from '../../images/logo.png'
import "./Header.css";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav-custom fixed-top">
      <div className="container">
        <NavLink className="navbar-brand nav-brand-custom" to="/home"><img className="img-fluid" src={navLogo} alt=""/>All Football</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
                <NavLink className="nav-link nav-link-custom" to="/home"> Home </NavLink>
            </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
