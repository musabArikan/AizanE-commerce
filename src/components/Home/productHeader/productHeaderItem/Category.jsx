import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../../redux/catgSlice";

const Category = ({ setCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <div className=" bg-gray-300 lg:p-4 py-4 pr-4 border-gray-300 border-y border-l flex items-center justify-start  rounded-l-[10px] w-9/12  h-[70px] overflow-x-scroll lg:overflow-x-hidden text-nowrap  overflow-y-hidden  ">
      <div className="lg:flex lg:w-3/12 lg:justify-center">
        <div className="border-b-[3px] text-base md:text-lg font-extrabold text-black secondary-border sticky left-0  bg-gray-300 z-10 pl-4 lg:pl-0 cursor-default">
          KATEGORİ
        </div>
      </div>
      {categories?.map((cat, i) => (
        <div
          key={i}
          className="text-base md:text-lg cursor-pointer secondary-hover px-2 text-black capitalize font-bold "
          onClick={() => {
            setCategory(cat);
          }}
        >
          {cat}
        </div>
      ))}
    </div>
  );
};

export default Category;
