"use client";

import Image from 'next/image';
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";

const Page = () => {
  const [products, setProducts] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const productLimit = 10; // page-এ 10 products

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`http://localhost:8000/product/allProduct?productLimit=${productLimit}&pageNo=${pageNo}`, { cache: "no-store" });
        const data = await res.json();
        setProducts(data.products || []);
        setTotalPages(data.totalPages || 1);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };
    fetchProducts();
  }, [pageNo]);

  const handlePrev = () => setPageNo(prev => Math.max(prev - 1, 1));
  const handleNext = () => setPageNo(prev => Math.min(prev + 1, totalPages));

  return (
    <div className="container mx-auto py-8">
      <div className="flex gap-6">
        {/* Left Column (sidebar / fakka) */}
        <div className="w-1/4 bg-gray-50 rounded-xl p-4 h-[800px]">
          <h2 className="text-xl font-semibold mb-4">Features / Filters</h2>
          <ul className="space-y-3 text-gray-700">
            <li>Free Shipping</li>
            <li>Discount Offers</li>
            <li>Top Rated</li>
            <li>New Arrivals</li>
            <li>Popular Brands</li>
          </ul>
        </div>

        {/* Right Column (Products Grid) */}
        <div className="w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {products.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-xl shadow-sm p-4 flex flex-col justify-between"
                style={{ height: "450px" }}
              >
                {/* Image */}
                <div className="relative w-full h-[160px] bg-gray-100 rounded-lg">
                  <Image src={item.mainImaage} alt={item.productTitle} fill style={{ objectFit: 'contain', padding: '0.5rem' }} />
                </div>

                {/* Content */}
                <div className="mt-2 flex flex-col justify-between flex-1">
                  <h3 className="font-medium text-[#111827] text-[16px] line-clamp-2">
                    {item.productTitle}
                  </h3>

                  <p className="mt-1 text-[#4B5563] text-[14px] line-clamp-3">
                    {item.productDescribtion}
                  </p>

                  {/* Review */}
                  <div className="flex items-center gap-1 mt-2">
                    {[1, 2, 3, 4].map((_, i) => (
                      <FaStar key={i} size={14} color="#FBBF24" />
                    ))}
                    <FaStar size={14} color="#E5E7EB" />
                    <span className="ml-2 text-sm text-[#4B5563]">{item.productReview?.length || 0}</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-lg font-semibold text-[#111827]">
                      ${(Number(item.discountPrice)).toFixed(2)}
                    </span>
                    <span className="text-sm line-through text-[#4B5563]">
                      ${(Number(item.price)).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
              disabled={pageNo === 1}
            >
              Prev
            </button>
            <span className="font-medium">
              Page {pageNo} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
              disabled={pageNo === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
