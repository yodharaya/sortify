"use client";
import { UserClassification } from "@/helpers/classification";
import { WhiteCard } from "./WhiteCard";

export function HistoryList({ items }: { items: UserClassification[] }) {
  return (
    <WhiteCard>
      <div className="flex justify-between items-center w-full">
        <h1 className="text-black font-bold">History Sortify</h1>
        <div>Filter</div>
      </div>
      <p className="text-gray-400 text-left w-full text-[10px]">
        More than {items.length}+ sort this week
      </p>
      <div className="w-full h-fit flex flex-col gap-[8px]">
        {items.map((item, index) => (
          <div className="flex justify-between items-center" key={index}>
            <div className="w-full">
              <h2 className="text-black text-[12px]">
                {item.wasteCategory.name}
              </h2>
              <p className="text-gray-400 text-[13px]">
                {new Date(item.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="w-[14px] aspect-square bg-gray-400"></div>
          </div>
        ))}
      </div>
    </WhiteCard>
  );
}
