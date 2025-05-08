"use client";

import Image from "next/image";
import BottomNav from "@/components/bottom/bottomnav";
import { useEffect, useState } from "react";

export default function RewardPage() {
  const totalPoints = 24000;
  const earnedPoints = 20000;
  const [dashOffset, setDashOffset] = useState(282.74); // full circle length
  const circumference = 2 * Math.PI * 45;

  useEffect(() => {
    const percentage = earnedPoints / totalPoints;
    const offset = circumference * (1 - percentage);
    const timeout = setTimeout(() => {
      setDashOffset(offset);
    }, 100);

    return () => clearTimeout(timeout);
  }, [earnedPoints, totalPoints, circumference]);

  return (
    <div className="bg-[#F7F7F7] min-h-screen pb-24 px-4 pt-6">
      {/* Hero Section */}
      <section className="bg-white rounded-2xl p-4 shadow-md mb-4">
        <h2 className="text-xl font-semibold mb-1">Hey Marshal!</h2>
        <p className="text-gray-500 text-sm">Here is what you earned while using Sortify.</p>
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
            <h3 className="text-2xl font-bold text-[#007BFF]">{earnedPoints.toLocaleString("id-ID")}</h3>
          </div>
        </div>
      </section>

      {/* Checkpoint Section */}
      <section className="bg-white rounded-2xl p-4 shadow-md mb-4 text-center">
        <h3 className="text-lg font-semibold mb-2">Checkpoint</h3>
        <div className="relative w-40 h-40 mx-auto">
          <svg
            className="w-full h-full rotate-[-90deg]"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#e5e7eb"
              strokeWidth="10"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#3b82f6"
              strokeWidth="10"
              fill="none"
              strokeDasharray="282.74"
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
              className="progress-animation"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-blue-600 text-sm font-semibold">
            <span>{earnedPoints.toLocaleString("id-ID")}</span>
            <span className="text-xs text-gray-500">/ {totalPoints.toLocaleString("id-ID")}</span>
          </div>
        </div>
      </section>

      {/* Redeem Points Section */}
      <section className="bg-white rounded-2xl p-4 shadow-md">
        <h3 className="text-lg font-semibold mb-3">Redeem Points</h3>
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-3 border rounded-xl mb-3"
          >
            <div className="flex items-center">
              <Image
                src="/reward-page/gopay.svg"
                alt="Gopay"
                width={32}
                height={32}
                className="min-w-[32px]"
              />
              <span className="ml-3 font-medium">10.000 Gopay</span>
            </div>
            <button className="bg-[#007BFF] text-white px-4 py-1.5 rounded-lg text-sm">
              Redeem →
            </button>
          </div>
        ))}
      </section>

      {/* Bottom Navigation */}
      <BottomNav />

      <style jsx>{`
        .progress-animation {
          transition: stroke-dashoffset 1.2s ease-out;
        }
      `}</style>
    </div>
  );
}
