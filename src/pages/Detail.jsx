// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { getDetailProducts } from "../redux/productSlice";
// import DetailComp from "../components/Detail/detailComp";
// import Loading from "../components/Loading";

// const Detail = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const { productDetail, productDetailStatus } = useSelector(
//     (state) => state.products
//   );
//   useEffect(() => {
//     dispatch(getDetailProducts(id));
//   }, [dispatch, id]);

//   return (
//     <div>
//       {productDetailStatus == "LOADING" ? (
//         <Loading />
//       ) : (
//         <DetailComp productDetail={productDetail} />
//       )}
//     </div>
//   );
// };

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailProducts } from "../redux/productSlice";
import DetailComp from "../components/Detail/detailComp";
import Loading from "../components/Loading";

const Detail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetail } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getDetailProducts(id));

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [dispatch, id]);

  if (isLoading) {
    return <Loading />;
  }

  return <DetailComp productDetail={productDetail} />;
};

export default Detail;
