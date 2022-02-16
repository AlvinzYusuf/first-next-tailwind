import React from "react";
import NavItem from "./NavItem";
import classNames from "classnames";

function Nav({ scheme, dir }) {
  const dirs = {
    horizontal: "justify-center space-x-10 font-poppins",
    vertical: "flex-col space-y-6",
  };

  const pickedDir = dirs[dir];
  return (
    <ul className={classNames("flex", pickedDir)}>
      <NavItem scheme={scheme} href="#profile">
        Profile
      </NavItem>
      <NavItem scheme={scheme} href="#skills">
        Skills
      </NavItem>
      <NavItem scheme={scheme} href="#projects">
        Projects
      </NavItem>
      <NavItem scheme={scheme} href="#contact">
        Contact
      </NavItem>
    </ul>
  );
}

export default Nav;
