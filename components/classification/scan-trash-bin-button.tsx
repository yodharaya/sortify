"use client";

import { useRouter } from "next/navigation";

interface Props {
  classificationId: string;
}

export default function ScanTrashBinButton({ classificationId }: Props) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/scan-bin/${classificationId}`)}
      className="w-fit py-3 px-4 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition duration-200"
    >
      Scan Trash Bin
    </button>
  );
}
