import React from "react";
import { removeFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
const CartComp = ({ cart }) => {
  const dispatch = useDispatch();
  const removeProductAlert = () => {
    Swal.fire({
      title: "Ürün sepetten çıkarıldı...",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `,
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `,
      },
    });
  };
  const { image, title, price, quantity, id } = cart;
  return (
    <div className="my-10 gap-[20px] md:gap-0 flex items-center justify-around bg-gray-100 p-4 shadow-sm rounded-md flex-wrap md:flex-nowrap ">
      <img
        src={image}
        alt=""
        className="w-[150px] h-[130px] object-fill shadow-sm  "
      />

      <div className="text-xl lg:text-2xl flex font-bold text-gray-800 line-clamp-1 w-full md:w-5/12 justify-center">
        {title}
      </div>
      <div className="flex w-full md:w-3/12 justify-center ">
        <div className="font-bold text-xl text-gray-950 border-b border-black  ">
          {price} TL <span className="secondary-color">({quantity})</span>
        </div>
      </div>

      <div
        className="bg-secondary-color text-white w-full  md:w-[150px] h-12 flex items-center justify-center text-xl cursor-pointer rounded-md"
        onClick={() => {
          dispatch(removeFromCart(id));
          removeProductAlert();
        }}
      >
        Ürünü Sil
      </div>
    </div>
  );
};

export default CartComp;
