"use client"

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/home");
  };

  const handleSignUp = () => {
    router.push("/signup");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 px-4 py-6">
      {/* Header dengan back button dan logo */}
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

      {/* Konten Login */}
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-2">Welcome Back</h1>
        <p className="text-xl text-gray-600 mb-8">Log In to your account</p>

        <form onSubmit={handleLogin} className="space-y-4">
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
            />
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-5 h-5 border-gray-300 rounded"
            />
            <label htmlFor="rememberMe" className="ml-2 text-gray-700">
              Remember me
            </label>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition duration-200"
          >
            Log In
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="mt-6 text-center">
          <button
          type="button"
            onClick={handleSignUp}
            className="text-black font-medium hover:underline"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
