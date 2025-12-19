
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export const revalidation = 3600;

export default async function RecommendationSlider({ text }) {
  const apiData = await fetch("http://localhost:8000/product/allProduct?productLimit=4", { cache: "no-store" });
  const data = await apiData.json();
  const products = data.products || [];

  return (
    <section className="py-10">
     <div className="flex items-center justify-between mb-6">
      <h2 className="font-semibold text-2xl md:text-4xl text-gray-900">{text}</h2>     
      <Link href="/product" className="flex items-center text-blue-600 font-medium hover:underline" >
        <span>View All Products</span>
        <FaArrowRight className="ml-2" />
      </Link>
    </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div key={item._id} className="bg-white w-full h-[450px] rounded-xl px-4 pb-2 text-center shadow-sm overflow-hidden">
            <div className="relative w-full h-[320px] flex items-center justify-center">
              <Image src={item.mainImaage} alt={item.productTitle} fill className="object-contain" />
            </div>
            <h3 className="mt-2 text-[16px] font-medium text-gray-900">{item.productTitle}</h3>
            <p className="text-sm text-gray-400">Accessories</p>
            <div className="flex justify-center gap-2 mt-1">
              <span className="font-semibold text-gray-900">${item.discountPrice}</span>
              {item.price && item.discountPrice !== item.price && (
                <span className="text-sm line-through text-gray-400">${item.price}</span>
              )}
            </div>
            <div className="mt-1 text-sm text-gray-400">⭐ {item.productReview.length}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
