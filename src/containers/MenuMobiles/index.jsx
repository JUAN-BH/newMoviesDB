import React from "react";
import { Controls } from "../../components/Controlss";

export const MenuMobile = ({ isOpen, setIsOpen }) => {
  function closeMenuMobile(e) {
    const element = e.target.id;
    // console.log(element);
    if (element.includes("backMenu")) {
      setIsOpen(false);
    }
  }

  return (
    <aside
      id="backMenu"
      className={`menuMobile ${isOpen ? "menuMobileShow" : "menuMobileHide"}`}
      onClick={closeMenuMobile}
    >
      <article className="menuMobile__content">
        <Controls />
      </article>
    </aside>
  );
};
