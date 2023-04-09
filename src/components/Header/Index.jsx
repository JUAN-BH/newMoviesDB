import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuMobile } from "../../containers/MenuMobile";
import { Controls } from "../Controls";

import logo from "../../assets/img/logoMovies.png";
import { Squash as Hamburger } from "hamburger-react";

export const Header = () => {
  const menuMobile = useRef(null);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

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
          // onToggle={(toggle) => {
          //   if (toggle) {
          //     menuMobile.current.style.transform = "translateX(0px)";
          //   } else {
          //     menuMobile.current.style.transform = "translateX(800px)";
          //   }
          // }}
          toggled={isOpen}
          toggle={setIsOpen}
        />
        <div className="menuDesktop">
          <Controls />
        </div>
      </nav>
      <MenuMobile isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};
