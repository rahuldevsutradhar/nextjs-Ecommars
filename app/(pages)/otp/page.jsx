// File: pages/otp.jsx


"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";

const OTPPage = () => {
  const router = useRouter();
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(Array(6).fill(""));

  // Handle input change
  const handleChange = (e, index) => {
    const value = e.target.value;

    // Only allow single digit
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Submit OTP
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (otp.some((digit) => digit === "")) {
      alert("Please enter complete OTP");
      return;
    }

    try {
      const res = await fetch("http://localhost:8000/auth/otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ otp: otp.join("") }),
      });

      const data = await res.json();
      console.log(data);

      router.push("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-2xl font-bold text-[#111827] mb-2">OTP Verification</h1>
      <p className="text-sm text-[#4B556399] mb-6 text-center">
        Enter the 6-digit OTP sent to your email/phone
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
        <div className="flex justify-center gap-2 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              ref={(el) => (inputRefs.current[index] = el)}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 text-center text-xl rounded focus:outline-none focus:ring-0 border-b-2 border-gray-400 bg-transparent"
            />
          ))}
        </div>

        <button
          type="submit"
          className="w-full max-w-md bg-gray-900 text-white py-2.5 rounded-lg hover:bg-gray-800 transition mb-4"
        >
          Continue
        </button>
      </form>

      <p className="text-center text-sm text-[#4B556399]">
        Didn't receive OTP?{" "}
        <span className="text-[#111827] font-medium cursor-pointer hover:underline">
          Resend OTP
        </span>
      </p>
    </div>
  );
};

export default OTPPage;
