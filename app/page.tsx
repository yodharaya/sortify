import MainHero from "@/components/hero/main";
import Navbar from "@/components/navbar/index";
import { twMerge } from "tailwind-merge";

export default function Home() {
  return (
    <div className={twMerge("w-full h-full", "flex flex-col gap-y-6", "pt-6", "bg-white")}>
      <Navbar />
      <div className={twMerge("px-10")}>
        <MainHero />
      </div>
    </div>
  )
}
