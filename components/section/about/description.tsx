import { twMerge } from "tailwind-merge";

export default function AboutDescription() {
  return (
    <div className={twMerge("w-full", "py-4 px-5", "bg-white", "rounded-lg")}>
      <p className={twMerge("text-shade-black text-sm tracking-wider leading-8 text-justify")}>
        <span className={twMerge("font-semibold text-primary-500")}>Sortify{" "}</span>
        adalah solusi cerdas berbasis Computer Vision yang memudahkan Anda memilah dan mengelola sampah secara otomatis
      </p>
    </div>
  )
}
