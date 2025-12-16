import Image from "next/image";
import Link from "next/link";
import Logo from "./../logo.png"
import {
  FaFacebookF,
  FaYoutube,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-20">
      <div className="container mx-auto px-6 py-14">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div>
            <Image src={Logo} alt="Logo"></Image>

            {/* Social */}
           {/* Social */}
<div className="flex flex-col gap-3 mt-4 text-sm text-[#4B5563CC]">
  <a href="#" className="flex items-center gap-2 hover:text-[#111827] transition">
    <FaFacebookF size={14} />
    Facebook
  </a>

  <a href="#" className="flex items-center gap-2 hover:text-[#111827] transition">
    <FaYoutube size={14} />
    Youtube
  </a>

  <a href="#" className="flex items-center gap-2 hover:text-[#111827] transition">
    <FaTelegramPlane size={14} />
    Telegram
  </a>

  <a href="#" className="flex items-center gap-2 hover:text-[#111827] transition">
    <FaTwitter size={14} />
    Twitter
  </a>
</div>


          </div>

          {/* Getting Started */}
          <div>
            <h3 className="font-medium text-[#111827] mb-4">
              Getting started
            </h3>
            <ul className="space-y-2 text-sm text-[#4B5563CC]">
              <li>Release Notes</li>
              <li>Upgrade Guide</li>
              <li>Browser Support</li>
              <li>Dark Mode</li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-medium text-[#111827] mb-4">
              Explore
            </h3>
            <ul className="space-y-2 text-sm text-[#4B5563CC]">
              <li>Prototyping</li>
              <li>Design systems</li>
              <li>Pricing</li>
              <li>Security</li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-medium text-[#111827] mb-4">
              Community
            </h3>
            <ul className="space-y-2 text-sm text-[#4B5563CC]">
              <li>Discussion Forums</li>
              <li>Code of Conduct</li>
              <li>Contributing</li>
              <li>API Reference</li>
            </ul>
          </div>

          {/* Payment */}
          <div className="flex items-end gap-3 mt-[50px]  md:justify-end">
            <span className="px-2 py-2 border rounded text-xs bg-black text-white">
              VISA
            </span>
            <span className="px-2 py-2 border rounded text-xs bg-black text-white">
              PayPal
            </span>
            <span className="px-2 py-2 border rounded text-xs bg-black text-white">
              Stripe
            </span>
            <span className="px-2 py-2 border rounded text-xs bg-black text-white">
              Amazon
            </span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 py-4">
        <p className="text-center text-sm text-[#4B5563CC]">
          Nexton eCommerce © 2024
        </p>
      </div>
    </footer>
  );
}
