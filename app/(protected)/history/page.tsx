import { cookies } from "next/headers";
import Image from "next/image";
import { StatsChart } from "./components/StatsChart";
import { HistoryList } from "./components/HistoryList";
import ClientBackButton from "./components/ClientBackButton";
import { getUserClassifications } from "@/helpers/classification";

async function getData() {
  const cookieStore = await cookies();
  const historyData = await getUserClassifications(cookieStore);

  // Transform history data for chart
  const chartData = historyData.reduce(
    (acc: { name: string; value: number }[], curr) => {
      const existingCategory = acc.find(
        (item) => item.name === curr.wasteCategory.name
      );
      if (existingCategory) {
        existingCategory.value += 1;
      } else {
        acc.push({ name: curr.wasteCategory.name, value: 1 });
      }
      return acc;
    },
    []
  );

  return { historyData, chartData };
}

export default async function HistoryPage() {
  const { historyData, chartData } = await getData();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 px-4 py-6 gap-[12px]">
      <div className="w-full flex justify-between items-center mb-8">
        <ClientBackButton />
        <div className="w-[120px] text-black flex items-center justify-center overflow-hidden">
          <Image
            src="/all-page/logo.svg"
            alt="Sortify Logo"
            width={120}
            height={36}
            className="aspect-auto w-[120px] h-[36px] object-cover"
          />
        </div>
      </div>

      <StatsChart data={chartData} />
      <HistoryList items={historyData} />
    </div>
  );
}
