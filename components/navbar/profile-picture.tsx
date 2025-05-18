"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { useUser } from "@/context/user-context";

interface Props {
  size: number;
}

export default function ProfilePicture({ size }: Props) {
  const { user } = useUser();

  return (
    <div className={twMerge("w-fit h-fit", "rounded-full", "overflow-clip")}>
      <Image
        src={user!.imageUrl}
        alt="user profile"
        width={size}
        height={size}
      />
    </div>
  );
}
