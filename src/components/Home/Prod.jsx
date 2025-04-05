import React from "react";
import { useNavigate } from "react-router-dom";

const Prod = ({ product }) => {
  const { image, title, price, id } = product;
  const navigate = useNavigate();
  return product ? (
    <div
      className="w-11/12 lg:w-3/12 sm:w-5/12 shadow-xl  px-3 py-10 mb-5 mx-5 rounded-xl relative cursor-pointer max-lg-w-[240px] bg-gray-100 flex justify-center items-center flex-wrap "
      onClick={() => navigate(`products/${id}`)}
    >
      <div
        className="text-xl font-bold absolute rounded-md top-0 right-0 bg-accent-color text-black bg-gray-200
         bg-opacity-80 shadow-md
       p-2 m-1"
      >
        {price} <span>TL</span>
      </div>
      <img
        src={image}
        alt=""
        className="w-[200px] h-[200px] object-fill shadow-md"
      />
      <div className="text-center px-3 mt-3 text-xl font-bold text-black line-clamp-1 w-11/12">
        {title}
      </div>
      <div className=" mt-5 box cursor-pointer text-[22px] w-[100px] h-12 flex items-center justify-center bg-secondary-color text-white hover:scale-95 transition-transform duration-300 rounded-xl py-4 ">
        İncele
      </div>
    </div>
  ) : (
    <div className="w-[400px] p-2 text-center">
      <p>Ürün bilgisi bulunamadı.</p>
    </div>
  );
};

export default Prod;
