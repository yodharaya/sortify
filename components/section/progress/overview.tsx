import { twMerge } from "tailwind-merge";
import SingleProgress from "./single-progress";
import { cookies } from "next/headers";
import { getWeeklyProgress } from "@/helpers/waste";

export default async function ProgressOverview() {
  const cookieStore = await cookies();
  const { percentage, count } = await getWeeklyProgress(cookieStore);

  return (
    <div
      className={twMerge(
        "w-full h-fit",
        "flex flex-row items-center justify-center gap-x-5"
      )}
    >
      <SingleProgress
        category="organik"
        number={count.organik}
        percentage={percentage.organik}
      />
      <SingleProgress
        category="anorganik"
        number={count.anorganik}
        percentage={percentage.anorganik}
      />
      <SingleProgress
        category="b3"
        number={count.b3}
        percentage={percentage.b3}
      />
    </div>
  );
}
