import Image from "next/image";

interface Props {
  size: number;
}

export default function Logo({ size }: Props) {
  return <Image src="/all-page/logo.svg" alt="Logo" width={size} height={size} />;
}
