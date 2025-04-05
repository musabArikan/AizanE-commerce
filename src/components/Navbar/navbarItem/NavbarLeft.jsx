import React from "react";
import { BiHome } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const NavbarLeft = () => {
  const location = useLocation();

  const showHomeIcon = location.pathname !== "/";

  return (
    <div className="flex-nowrap items-center  sm:gap-0 md:gap-12 flex  ">
      {showHomeIcon && (
        <Link
          to="/"
          className="font-bold secondary-color text-3xl sm:text-5xl "
        >
          <BiHome />
        </Link>
      )}
    </div>
  );
};

export default NavbarLeft;
