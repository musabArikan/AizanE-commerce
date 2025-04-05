import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { addToCart, getCartTotal } from "../../redux/cartSlice";

const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch();
  const { image, title, description, price, rating } = productDetail;
  const [quantity, setQuantity] = useState(0);

  const decrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const increment = () => {
    if (rating?.count > quantity) setQuantity(quantity + 1);
  };

  const addBasket = () => {
    if (quantity > 0) {
      dispatch(
        addToCart({
          id: productDetail?.id,
          title,
          image,
          price,
          quantity,
        })
      );

      dispatch(getCartTotal());

      Swal.fire({
        title: "Başarılı!",
        text: "Ürün sepete eklendi.",
        icon: "success",
        confirmButtonText: "Tamam",
        toast: true,
        position: "top-end",
        timer: 2000,
        showConfirmButton: false,
      });
    } else {
      Swal.fire({
        title: "Hata!",
        text: "Lütfen adet seçiniz.",
        icon: "error",
        confirmButtonText: "Tamam",
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-6  rounded-lg shadow-md">
      {/* Product Image */}
      <div className="w-full md:w-5/12 flex justify-center">
        <img
          src={image}
          alt={title}
          className="rounded-lg shadow-lg object-contain w-full h-auto max-h-96"
        />
      </div>

      {/* Product Details */}
      <div className="w-full md:w-7/12 bg-white p-6 rounded-lg shadow-lg">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center md:text-left">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-6 text-sm md:text-base line-clamp-4">
          {description}
        </p>

        {/* Price and Quantity */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          {/* Quantity Controls */}
          <div className="flex items-center gap-4">
            <button
              className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center text-2xl font-bold hover:bg-red-600 transition"
              onClick={decrement}
            >
              -
            </button>
            <span className="text-xl font-bold text-gray-800">{quantity}</span>
            <button
              className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold hover:bg-green-600 transition"
              onClick={increment}
            >
              +
            </button>
          </div>

          {/* Stock Info */}
          <div className="text-sm text-gray-600">
            Toplam Stok:{" "}
            <span className="font-bold text-gray-800">{rating?.count}</span>
          </div>

          {/* Price */}
          <div className="text-xl font-bold text-gray-700 bg-gray-200 p-3 rounded-lg">
            {price} TL
          </div>
        </div>

        {/* Add to Cart Button */}
        <div className="flex justify-center">
          <button
            className="bg-secondary-color text-white text-lg font-semibold  py-3 px-4 sm:py-3 sm:px-6 rounded-lg shadow-md "
            onClick={addBasket}
          >
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
