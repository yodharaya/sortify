import Image from "next/image";
import { twMerge } from "tailwind-merge";
import SearchBar from "../search-bar";

export default function MainHero() {
  return (
    <section className={twMerge("w-full h-fit", "flex flex-col items-center justify-center", "py-3 px-2", "rounded-xl", "bg-primary-500")}>
      <div className={twMerge("relative", "w-fit h-fit")}>
        <Image src={"/home-page/hero.svg"} alt="main hero" width={300} height={300} />
        <div className={twMerge("absolute left-0 bottom-0", "w-full h-fit", "pr-32")}>
          <SearchBar />
        </div>
      </div>
    </section>
  )
}
