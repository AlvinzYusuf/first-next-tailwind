import React from "react";

function Sectiontitle({ left, children }) {
  return (
    <h2
      className={`text-2xl font-semibold font-poppins${
        !left ? " text-center" : ""
      }`}
    >
      {children}
    </h2>
  );
}

export default Sectiontitle;
