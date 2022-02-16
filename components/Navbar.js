import React from "react";
import Button from "./Button";
import Nav from "./Nav";

function Navbar() {
  return (
    <div className="flex items-center py-10">
      <div className="w-3/12">
        <div className="text-2xl font-semibold font-poppins uppercase tracking-widest text-white">
          Logo
        </div>
      </div>
      <div className="w-6/12">
        <Nav dir="horizontal" scheme="light" />
      </div>
      <div className="w-3/12 text-right hidden md:block">
        <Button href="#contact" pill variant="outline-yellow">
          Kontak
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
