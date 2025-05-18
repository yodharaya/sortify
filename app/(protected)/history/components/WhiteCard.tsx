"use client";

export function WhiteCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-fit flex flex-col items-center justify-center py-3 px-2 rounded-xl bg-white">
      {children}
    </div>
  );
}
