import React from "react";
import { Controls } from "../components/Controls";

export const MenuMobile = ({ refMenu }) => {
  return (
    <aside className="menuMobile" ref={refMenu}>
      <article className="menuMobile__content">
        <Controls />
      </article>
    </aside>
  );
};
