"use client";

import Image from "next/image";
import Link from "next/link";

import { useSearchParams } from "next/navigation";

export default function ErrorPage() {
  const searchParams = useSearchParams();
  const message = searchParams.get("message");
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
      <h1 className="text-3xl font-bold mb-2 text-center">Try Again!</h1>
      <p className="text-lg text-gray-600 mb-6 text-center">
        {message == "Missing token" ? "Email Verification Error" : ""}
      </p>

      <div className="w-48 h-48 mb-8">
        <Image
          src="/error/email-verification-error.svg"
          alt="Verification Success"
          width={192}
          height={192}
        />
      </div>

      <Link href="/signup">
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-8 py-3 rounded-full">
          Go Sign Up
        </button>
      </Link>
    </div>
  );
}
