import Image from "next/image";

interface Props {
  size: number;
}

export default function Notification({ size }: Props) {
  return <Image src="/all-page/bell.svg" alt="Logo" width={size} height={size} />;
}
