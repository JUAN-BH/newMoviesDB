import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/img/logoMovies.png";
import { Controls } from "./Controls";
import { Squash as Hamburger } from "hamburger-react";
import { MenuMobile } from "../containers/MenuMobile";

export const Header = () => {
  const menuMobile = useRef(null);
  const navigate = useNavigate();

  function goHome() {
    navigate("/");
  }

  return (
    <header>
      <nav>
        <h1 onClick={goHome}>
          <img src={logo} alt="logo" />
          MoviesDB
        </h1>
        <Hamburger
          size={30}
          rounded
          hideOutline={false}
          onToggle={(toggle) => {
            if (toggle) {
              menuMobile.current.style.transform = "translateX(0px)";
            } else {
              menuMobile.current.style.transform = "translateX(800px)";
            }
          }}
        />
        <div className="menuDesktop">
          <Controls />
        </div>
      </nav>
      <MenuMobile refMenu={menuMobile} />
    </header>
  );
};
