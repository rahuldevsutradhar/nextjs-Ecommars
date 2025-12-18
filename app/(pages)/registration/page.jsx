"use client";

import { useRouter } from "next/navigation";

export default function Registration() {
  const router = useRouter();

  const handleContinue = (e) => {
    e.preventDefault();
    // এখানে চাইলে API call করতে পারো
    router.push("/verify-otp");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 sm:p-8">
        {/* Title */}
        <h1 className="text-2xl font-bold text-[#111827] mb-2">
         Registration
        </h1>
        <p className="text-sm text-[#4B556399] mb-6">
          Enter your details to continue
        </p>

        <form onSubmit={handleContinue} className="space-y-4">
          {/* Username */}
          <div>
            <label className="block text-sm mb-1 text-[#4B556399]">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1 text-[#4B556399]">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-1 text-[#4B556399]">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm mb-1 text-[#4B556399]">
              Phone
            </label>
            <input
              type="tel"
              placeholder="Enter phone number"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm mb-1 text-[#4B556399]">
              Address
            </label>
            <input
              type="text"
              placeholder="Enter address"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {/* User Role */}
          <div>
            <label className="block text-sm mb-1 text-[#4B556399]">
              User Role
            </label>
            <select className="w-full border rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-gray-300">
              <option value="">Select role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm mb-1 text-[#4B556399]">
              Gender
            </label>
            <select className="w-full border rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-gray-300">
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full mt-4 bg-gray-900 text-white py-2.5 rounded-lg hover:bg-gray-800 transition"
          >
            Continue
          </button>
        </form>

        {/* Login link */}
        <p className="text-center text-sm text-[#4B556399] mt-4">
          Already have an account?{" "}
          <span className="text-[#111827] font-medium cursor-pointer hover:underline">
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
