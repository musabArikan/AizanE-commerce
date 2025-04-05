import React, { useEffect, useState } from "react";
import SliderComp from "../components/Home/SliderComp";
import Products from "../components/Home/Products";
import Loading from "../components/Loading";
import ProductHeader from "../components/Home/productHeader/ProductHeader";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <SliderComp />

      <ProductHeader setSort={setSort} setCategory={setCategory} />
      <div className="flex">
        <Products category={category} sort={sort} />
      </div>
    </div>
  );
};

export default Home;
