import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface Props {
  size: number;
}

export default function ProfilePicture({ size }: Props) {
  return (
    <div className={twMerge("w-fit h-fit", "rounded-full", "overflow-clip")}>
      <Image src="/all-page/mock-user-profile.jpg" alt="user profile" width={size} height={size} />
    </div>
  )
}
