"use client"

import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/login"); // Ganti ke halaman tujuan setelah splash, misalnya /login
    }, 4000); // 4 detik

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-[#3170AF]">
      <div className="flex items-center space-x-2">
        <Image
          src="/first-page/sortify-logo.svg"
          alt="Sortify Logo"
          width={36}
          height={36}
        />
        <h1 className="text-white text-2xl font-bold tracking-widest">RTIFY</h1>
      </div>
    </div>
  );
}
