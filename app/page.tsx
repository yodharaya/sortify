import Navbar from "@/components/navbar/index";
import { twMerge } from "tailwind-merge";

export default function Home() {
  return <div className={twMerge("w-full h-full", "py-8 px-6", "bg-white")}>
    <Navbar />
  </div>
}
