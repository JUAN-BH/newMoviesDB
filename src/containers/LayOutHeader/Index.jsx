import React from "react";
import { Header } from "../../components/Header";

export const LayoutHeader = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
