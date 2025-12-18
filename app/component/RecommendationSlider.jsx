"use client";

import Slider from "react-slick";
import Image from "next/image";

export default function RecommendationSlider({ products, text }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // 4 products per slide
    slidesToScroll: 4,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className="py-10">
      <h2 className="mb-3 font-semibold text-2xl md:text-4xl text-gray-900">
        {text}
      </h2>

    <Slider {...settings}>
  {products.map((item) => (
    <div key={item.id} className="px-2">
      <div className="bg-white w-[300px] h-[450px] rounded-xl px-4  pb-2 text-center shadow-sm overflow-hidden">
        <div className="relative w-full h-[320px] flex items-center justify-center">
          <Image src={item.thumbnail} alt={item.title} fill className="object-contain" />
        </div>
        <h3 className="mt-2 text-[16px] font-medium text-gray-900">{item.title}</h3>
        <p className="text-sm text-gray-400">Accessories</p>
        <div className="flex justify-center gap-2 mt-1">
          <span className="font-semibold text-gray-900">${item.price}</span>
          {item.oldPrice && (
            <span className="text-sm line-through text-gray-400">${item.oldPrice}</span>
          )}
        </div>
        <div className="mt-1 text-sm text-gray-400">⭐ {item.rating}</div>
      </div>
    </div>
  ))}
</Slider>

    </section>
  );
}
