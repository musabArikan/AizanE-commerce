import React from "react";
import NavbarRight from "./navbarItem/NavbarRight";
import NavbarLeft from "./navbarItem/NavbarLeft";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center mt-5 mb-12">
        <NavbarLeft />
        <div className="logo font-semibold text-black text-[25px] sm:text-4xl  lg:text-[44px] flex ">
          AizanShop
        </div>
        <NavbarRight />
      </div>
    </div>
  );
};

export default Navbar;
