'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaStar } from "react-icons/fa";

const Page = () => {
  const [myProducts, setMyProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setMyProducts(data.products));
  }, []);

  return (
    <div className="container mx-auto flex">
      <div className="w-[300px]"></div>

      <div className="w-[967px] flex flex-wrap gap-4">
        {myProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-sm p-4"
            style={{ width: "310px", height: "450px" }}
          >
            {/* Image */}
            <div className="relative w-full h-[260px] bg-gray-100 rounded-lg">
              <Image src={item.thumbnail} alt={item.title} fill style={{ objectFit: 'contain', padding: '1rem' }} />
            </div>

            {/* Content */}
            <div className="mt-4">
              {/* Title */}
              <h3 className="font-medium" style={{ color: "#111827", fontSize: "16px" }}>
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-1" style={{ color: "#4B5563", fontSize: "14px" }}>

              </p>

              {/* Review */}
              <div className="flex items-center gap-1 mt-2">
                {[1, 2, 3, 4].map((_, i) => (
                  <FaStar key={i} size={14} color="#FBBF24" />
                ))}
                <FaStar size={14} color="#E5E7EB" />
                <span className="ml-2 text-sm text-[#4B5563]">
                  {item.rating}
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-2 mt-3">
                <span className="text-lg font-semibold text-[#111827]">
                  ${(item.price - (item.price * item.discountPercentage / 100)).toFixed(2)}
                </span>
                <span className="text-sm line-through text-[#4B5563]">
                  {item.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
