import React from "react";
import { useNavigate } from "react-router-dom";
import { IconChevronLeft } from "@tabler/icons-react";

export const BackButton = () => {
  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }

  return (
    <button className="buttonBack" onClick={goBack}>
      <IconChevronLeft size={30} />
    </button>
  );
};
