import MainHero from "@/components/hero/main";
import Navbar from "@/components/navbar/index";
import ProgressSection from "@/components/section/progress";
import { twMerge } from "tailwind-merge";

export default function Home() {
  return (
    <div className={twMerge("w-full h-full", "flex flex-col gap-y-6", "pt-6")}>
      <Navbar />
      <div className={twMerge("flex flex-col gap-y-8", "px-10")}>

        <section className={twMerge("w-full h-fit")}>
          <MainHero />
        </section>
        <ProgressSection />

      </div>
    </div>
  )
}
