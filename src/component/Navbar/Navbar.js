import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink,
} from "./Navbar.elements";
import LogoImage from "../../assets/images/logo-text.png";
import { useLocation, Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const location = useLocation();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  let page = "";
  const getCurrentPage = () => {
    switch (window.location.pathname) {
      case "/":
        page = "home";
        break;
      case "/services":
        page = "services";
        break;
      case "/products":
        page = "products";
        break;
      default:
        page = undefined;
    }
  };

  return (
    <>
      {getCurrentPage()}
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <img src={LogoImage} alt=" " className="logo-img" />
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                {/* <NavLinks to="/" onClick={closeMobileMenu} >
                  Home
                </NavLinks> */}
                <div className="Header-text">
                  <NavLinks to="/" onClick={closeMobileMenu}>
                    <span
                      className={
                        "hover-underline-animation " +
                        (page == "home" ? "active" : "")
                      }
                    >
                      Home
                    </span>
                  </NavLinks>
                </div>
              </NavItem>
              <NavItem>
                <div className="Header-text">
                  <NavLinks to="/services" onClick={closeMobileMenu}>
                    <span
                      className={
                        "hover-underline-animation " +
                        (page == "services" ? "active" : "")
                      }
                    >
                      Services
                    </span>
                  </NavLinks>
                </div>
              </NavItem>
              <NavItem>
                <div className="Header-text">
                  <NavLinks to="/products" onClick={closeMobileMenu}>
                    <span
                      className={
                        "hover-underline-animation " +
                        (page == "products" ? "active" : "")
                      }
                    >
                      About
                    </span>
                  </NavLinks>
                </div>
              </NavItem>
              <NavItemBtn>
                {/* {button ? (
                  <NavBtnLink to='/sign-up'>
                    <Button primary>SIGN UP</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/sign-up'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                )} */}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
