"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch("http://localhost:8000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const data = await res.json();
      console.log(data);
      router.push("/");
    } else {
      const errorText = await res.text();
      alert(errorText);
    }
  } catch (error) {
    console.error(error);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 sm:p-8">
        {/* Title */}
        <h1 className="text-2xl font-bold text-[#111827] mb-2">Login</h1>
        <p className="text-sm text-[#4B556399] mb-6">
          Enter your email and password to continue
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
         
          <div>
            <label className="block text-sm mb-1 text-[#4B556399]">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
              required
            />
          </div>

          
          <div>
            <label className="block text-sm mb-1 text-[#4B556399]">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
              required
            />
          </div>

          {/* Forgot password */}
          <p className="text-right text-sm text-[#4B556399] hover:underline cursor-pointer">
            Forgot password?
          </p>

          {/* Login button */}
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2.5 rounded-lg hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-[#4B556399] mt-4">
          Don't have an account?{" "}
          <span className="text-[#111827] font-medium cursor-pointer hover:underline">
            Register
          </span>
        </p>
      </div>
    </div>
  );
}
