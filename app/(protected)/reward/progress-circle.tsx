"use client";

import { useEffect, useState } from "react";

interface ProgressCircleProps {
  earnedPoints: number;
  totalPoints: number;
}

export default function ProgressCircle({
  earnedPoints,
  totalPoints,
}: ProgressCircleProps) {
  const [dashOffset, setDashOffset] = useState(282.74);
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
          className="transition-all duration-1200 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-blue-600 text-sm font-semibold">
        <span>{earnedPoints.toLocaleString("id-ID")}</span>
        <span className="text-xs text-gray-500">
          / {totalPoints.toLocaleString("id-ID")}
        </span>
      </div>
    </div>
  );
}
