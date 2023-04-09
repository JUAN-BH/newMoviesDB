import React from "react";
import { Header } from "../../components/Headers";

export const LayoutHeader = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
