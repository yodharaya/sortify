import { twMerge } from "tailwind-merge";
import SingleProgress from "./single-progress";

export default function ProgressOverview() {
  return (
    <div className={twMerge("w-full h-fit", "flex flex-row items-center justify-center gap-x-5")}>

      <SingleProgress category="organik" number={72} percentage={20} />
      <SingleProgress category="anorganik" number={32} percentage={-10} />
      <SingleProgress category="b3" number={51} percentage={10} />

    </div>
  )
}
