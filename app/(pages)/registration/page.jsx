"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"

export default function Registration() {
    const router = useRouter();

  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    userRole: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleIncrement = async (e) => {
    e.preventDefault(); 

    try {
      const res = await fetch("http://localhost:8000/auth/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
     router.push("/otp")
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-[#111827] mb-2">
          Registration
        </h1>
        <p className="text-sm text-[#4B556399] mb-6">
          Enter your details to continue
        </p>

        <form onSubmit={handleIncrement} className="space-y-4">
          <input
            name="userName"
            placeholder="Username"
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-lg"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-lg"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-lg"
          />

          <input
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-lg"
          />

          <input
            name="address"
            placeholder="Address"
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-lg"
          />

          <select
            name="userRole"
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-lg"
          >
            <option value="">Select role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <select
            name="gender"
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-lg"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <button 
          type="submit"
          className="w-full bg-gray-900 text-white py-2 rounded-lg"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
