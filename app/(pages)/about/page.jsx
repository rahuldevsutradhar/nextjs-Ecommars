export const revalidate = 60
import React from "react";
import RecommendationSlider from "../../component/RecommendationSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Page = async () => {
  const res = await fetch("https://dummyjson.com/products")               
  const data = await res.json();

  return (
    <div className="container mx-auto py-10">
      <RecommendationSlider products={data.products} text="Recommended Products" />
    </div>
  );
};

export default Page;
