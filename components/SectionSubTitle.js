import React from "react";

function SectionSubTitle({ children, left }) {
  return (
    <p
      className={
        (`text-lg font-poppins mt-2 text-gray-600`, !left && "textt-center")
      }
    >
      {children}
    </p>
  );
}

export default SectionSubTitle;
