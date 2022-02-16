import React from "react";
import classNames from "classnames";

function SectionSubTitle({ left, children }) {
  return (
    <p
      className={classNames(
        "text-lg mt-2 text-gray-600 font-poppins",
        !left && "text-center"
      )}
    >
      {children}
    </p>
  );
}

export default SectionSubTitle;
