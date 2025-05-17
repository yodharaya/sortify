import { cookies } from "next/headers";
import { getUserRewards, getTotalPoints } from "@/helpers/reward";
import ProgressCircle from "./progress-circle";
import HeroSection from "./hero-section";
import Image from "next/image";

export default async function RewardPage() {
  const cookieStore = await cookies();
  const rewards = await getUserRewards(cookieStore);
  const earnedPoints = getTotalPoints(rewards);
  const totalPoints = 24000;

  return (
    <div className="bg-[#F7F7F7] min-h-screen pb-24 px-4 pt-6">
      <HeroSection earnedPoints={earnedPoints} />

      {/* Checkpoint Section */}
      <section className="bg-white rounded-2xl p-4 shadow-md mb-4 text-center">
        <h3 className="text-lg font-semibold mb-2">Checkpoint</h3>
        <ProgressCircle earnedPoints={earnedPoints} totalPoints={totalPoints} />
      </section>

      {/* Redeem Points Section */}
      <section className="bg-white rounded-2xl p-4 shadow-md">
        <h3 className="text-lg font-semibold mb-3">Recent Rewards</h3>
        <div className="space-y-3">
          {rewards.slice(0, 3).map((reward) => (
            <div
              key={reward.id}
              className="flex justify-between items-center p-3 border rounded-xl"
            >
              <div className="flex items-center">
                <Image
                  src="/reward-page/gopay.svg"
                  alt="Points"
                  width={32}
                  height={32}
                  className="min-w-[32px]"
                />
                <div className="ml-3">
                  <span className="font-medium">{reward.points} Points</span>
                  <p className="text-sm text-gray-500">
                    {new Date(reward.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
