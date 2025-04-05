import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/productSlice";
import { getCategoryProducts } from "../../redux/productSlice";
import Loading from "../Loading";
import Prod from "./Prod";
import ReactPaginate from "react-paginate";

const Products = ({ category, sort }) => {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products);

  //! Paginate Area
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products?.slice(itemOffset, endOffset) || [];
  const pageCount = Math.ceil(products.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    if (category) {
      dispatch(getCategoryProducts(category));
    } else {
      dispatch(getProducts());
    }
  }, [dispatch, category]);
  return (
    <div>
      {productsStatus == "LOADING" ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-wrap justify-center mt-7">
            {currentItems
              ?.sort((a, b) =>
                sort == "inc"
                  ? b.price - a.price
                  : sort == "dec"
                  ? a.price - b.price
                  : ""
              )
              ?.map((product, i) => (
                <Prod product={product} key={i} />
              ))}
          </div>
          <div className="flex justify-end items-center">
            <ReactPaginate
              className="paginate"
              breakLabel="..."
              nextLabel=" >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="<"
              renderOnZeroPageCount={null}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
