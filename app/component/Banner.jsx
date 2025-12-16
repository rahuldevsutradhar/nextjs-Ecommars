"use client";

import Image from "next/image";
import React from "react";
import Slider from "react-slick";

import banner1 from "../banner.png";
import banner2 from "../banner.png";
import banner3 from "../banner.png";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container w-full h-[600px]">
      <Slider {...settings}>
        <div>
          <Image
            src={banner1}
            alt="banner 1"
            className="w-full h-[600px] object-cover"
          />
        </div>

        <div>
          <Image
            src={banner2}
            alt="banner 2"
            className="w-full h-[600px] object-cover"
          />
        </div>

        <div>
          <Image
            src={banner3}
            alt="banner 3"
            className="w-full h-[600px] object-cover"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
