"use client";

import Slider from "react-slick";
import Image from "next/image";

export default function RecommendationSlider({ products= [] , text}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-10">
      {/* Heading */}
      <h2
        className="mb-8 font-semibold"
        style={{
          fontSize: "36px",
          lineHeight: "40px",
          color: "#111827",
        }}
      >
        Recommendations{" "}
        <span style={{ color: "#4B5563CC", fontWeight: 400 }}>
         {text}
        </span>
      </h2>

      {/* Slider */}
      <Slider {...settings}>
        {products.map((item, index) => (
          <div key={index} className="px-3">
            {/* Card */}
            <div className="bg-white rounded-xl p-4 text-center shadow-sm">
              {/* Image */}
              <div className="relative w-full h-[260px] flex items-center justify-center">
                <Image src={item.image} alt={item.title}
                  fill className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="mt-4 text-[16px] font-medium text-[#111827]">
                {item.title}
              </h3>

              {/* Category */}
              <p className="text-sm text-[#4B5563CC]">Accessories</p>

              {/* Price */}
              <div className="flex justify-center gap-2 mt-1">
                <span className="font-semibold text-[#111827]">
                  ${item.price}
                </span>
                {item.oldPrice && (
                  <span className="text-sm line-through text-[#4B5563CC]">
                    ${item.oldPrice}
                  </span>
                )}
              </div>

              {/* Rating */}
              <div className="mt-2 text-sm text-[#4B5563CC]">
                ⭐ {item.rating}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
