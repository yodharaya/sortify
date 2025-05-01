// app/register/page.tsx
"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Simulasi pendaftaran berhasil
    router.push("/home");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 px-4 py-6">
      {/* Header dengan tombol kembali dan logo */}
      <div className="flex justify-between items-center mb-8">
        <button onClick={() => router.back()} className="p-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div>
          <Image
            src="/all-page/logo.svg"
            alt="Sortify Logo"
            width={120}
            height={36}
          />
        </div>
      </div>

      {/* Konten Registrasi */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-2">Register Here</h1>
        <p className="text-gray-600 mb-6">Create your own account</p>

        <form onSubmit={handleSignUp} className="space-y-4">
          {/* Username Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Image
                src="/login-page/username.svg"
                alt="Username Icon"
                width={20}
                height={20}
              />
            </div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full pl-12 pr-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Image
                src="/login-page/password.svg"
                alt="Password Icon"
                width={20}
                height={20}
              />
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full pl-12 pr-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Confirm Password Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Image
                src="/login-page/password.svg"
                alt="Confirm Password Icon"
                width={20}
                height={20}
              />
            </div>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="*Confirm Password"
              className="w-full pl-12 pr-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition duration-200"
          >
            Sign Up
          </button>
        </form>

        {/* Link ke halaman login */}
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => router.push("/login")}
            className="text-black font-medium hover:underline"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}
