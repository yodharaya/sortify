import Image from "next/image"
import { twMerge } from "tailwind-merge"

interface Props {
  category: "organik" | "anorganik" | "b3"
  number: number
  percentage: number
}

export default function SingleProgress({ category, number, percentage }: Props) {
  const polygon = percentage < 0 ? "/all-page/polygon/down.svg" : "/all-page/polygon/up.svg"
  const color = percentage < 0 ? "text-error-500" : "text-success-500"

  return (
    <div className={twMerge("w-full h-fit", "flex flex-col items-center gap-y-6", "p-3", "rounded-lg", "bg-white")}>

      <h4 className={twMerge("text-sm text-primary-500")}>{category}</h4>
      <p className={twMerge("text-3xl font-semibold text-shade-black")}>{number}</p>
      <div className={twMerge("flex flex-row gap-x-2 items-center")}>
        <Image src={polygon} width={10} height={10} alt="polygon" />
        <p className={twMerge("text-sm", color)}>{percentage}%</p>
      </div>

    </div>
  )
}
