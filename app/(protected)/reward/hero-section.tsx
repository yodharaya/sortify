"use client";

import { useUser } from "@/context/user-context";
import Image from "next/image";

interface HeroSectionProps {
  earnedPoints: number;
}

export default function HeroSection({ earnedPoints }: HeroSectionProps) {
  const { user } = useUser();

  return (
    <section className="bg-white rounded-2xl p-4 shadow-md mb-4">
      <h2 className="text-xl font-semibold mb-1">Hey {user?.name}!</h2>
      <p className="text-gray-500 text-sm">
        Here is what you earned while using Sortify.
      </p>
      <div className="bg-[#EAF6FF] flex items-center gap-3 mt-4 p-4 rounded-xl">
        <Image
          src="/reward-page/money.svg"
          alt="Points Earned"
          width={36}
          height={36}
          className="min-w-[36px]"
        />
        <div>
          <p className="text-sm text-gray-600">Points Earned</p>
          <h3 className="text-2xl font-bold text-[#007BFF]">
            {earnedPoints.toLocaleString("id-ID")}
          </h3>
        </div>
      </div>
    </section>
  );
}
