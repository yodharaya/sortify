"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ClientBackButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className="p-2">
      <Image src="/setting-page/back.svg" alt="Back" width={24} height={24} />
    </button>
  );
}
