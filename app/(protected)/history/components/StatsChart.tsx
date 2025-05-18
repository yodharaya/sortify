"use client";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { WhiteCard } from "./WhiteCard";

const COLORS = ["#3498db", "#e74c3c", "#2ecc71", "#f1c40f"];

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-4 h-4 rounded" style={{ backgroundColor: color }}></div>
      <span className="text-sm text-gray-600">{label}</span>
    </div>
  );
}

type ChartData = {
  name: string;
  value: number;
}[];

export function StatsChart({ data }: { data: ChartData }) {
  const total = data.reduce((sum, entry) => sum + entry.value, 0);

  return (
    <WhiteCard>
      <h1 className="text-4xl font-bold mb-2 text-black w-full text-left">
        Weekly Sortify Stats
      </h1>
      <p className="text-xl text-gray-600 mb-8 w-full text-left">
        {total} sort this week
      </p>
      <div className="w-full h-64 bg-gray-200 rounded-lg mt-4">
        <p className="relative w-full text-center text-black translate-y-[136px]">
          {total}
        </p>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={75}
              paddingAngle={3}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex flex-wrap gap-4">
        {data.map((item, index) => (
          <LegendItem
            key={item.name}
            color={COLORS[index % COLORS.length]}
            label={item.name}
          />
        ))}
      </div>
    </WhiteCard>
  );
}
