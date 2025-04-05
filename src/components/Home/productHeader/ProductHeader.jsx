import React from "react";
import Category from "./productHeaderItem/Category";
import Sorting from "./productHeaderItem/Sorting";

const ProductHeader = ({ setCategory, setSort }) => {
  return (
    <div
      className="flex items-center justify-center
     mt-20 mb-2 overflow-x-auto  text-nowrap flex-nowrap overflow-y-hidden"
    >
      <Category setCategory={setCategory} />
      <Sorting setSort={setSort} />
    </div>
  );
};

export default ProductHeader;
