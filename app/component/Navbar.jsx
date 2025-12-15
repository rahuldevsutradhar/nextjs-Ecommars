"use client";

import Link from "next/link";
import Image from "next/image";
import { VscSearch } from "react-icons/vsc";
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import logo from "../logo.png";

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-[80px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              alt="Nexton Logo"
              width={120}
              height={32}
              priority
            />
          </Link>

          {/* Search */}
          <div className="relative w-[420px] hidden md:block">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
              <VscSearch />
            </span>
            <input
              type="text"
              placeholder="Search in products..."
              className="w-full h-[48px] pl-11 pr-4 rounded-full bg-[#F8F8F8] text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-black/10"
            />
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-5">

            {/* User */}
            <button className="p-2 rounded-full hover:bg-gray-100">
              <FaUserAlt className="text-xl text-gray-700" />
            </button>

            {/* Cart */}
            <button className="relative p-2 rounded-full hover:bg-gray-100">
              <HiOutlineShoppingBag className="text-2xl text-gray-700" />

              {/* Cart Badge */}
              <span className="absolute -top-1 -right-1 bg-[#0EA5E9] text-white text-[10px] font-semibold w-5 h-5 rounded-full flex items-center justify-center">
                2
              </span>
            </button>

          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
