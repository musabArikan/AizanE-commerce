import React, { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../../redux/cartSlice";
import { useNavigate } from "react-router-dom";
const NavbarRight = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { itemCount } = useSelector((state) => state.carts);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, itemCount]);
  return (
    <div className="flex items-center gap-3 sm:gap-5 md:gap-8 ">
      <div className="hidden sm:flex items-center border p-3 rounded-full bg-white h-11 lg:h-12  ">
        <input
          type="text"
          placeholder="Arama Yapınız..."
          className="bg-white outline-none"
        />
        <BiSearch size={25} className="secondary-color" />
      </div>
      <AiOutlineHeart className="secondary-color text-2xl sm:text-3xl " />
      <div className="relative cursor-pointer" onClick={() => navigate("cart")}>
        <div
          className="absolute -top-3 -right-3 bg- text-white bg-primary-color shadow-md rounded-full 
         h-4 sm:h-5  text-xs sm:text-sm md:text-md flex items-center justify-center w-auto min-w-[22px]  font-semibold"
        >
          {itemCount}
        </div>
        <SlBasket className="secondary-color text-2xl sm:text-3xl " />
      </div>
    </div>
  );
};

export default NavbarRight;
