"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

function WhiteCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={
        "w-full h-fit flex flex-col items-center justify-center py-3 px-2 rounded-xl bg-white"
      }
    >
      {children}
    </div>
  );
}

const DUMMY_DATA = [
  { trash: "Plastic", date: "2023-10-01" },
  { trash: "Paper", date: "2023-10-02" },
  { trash: "Metal", date: "2023-10-03" },
  { trash: "Glass", date: "2023-10-04" },
  { trash: "Organic", date: "2023-10-05" },
  { trash: "E-Waste", date: "2023-10-06" },
  { trash: "Hazardous", date: "2023-10-07" },
];

const DUMMY_DATA2 = [
  { name: "Logam", value: 80 },
  { name: "B3", value: 220 },
  { name: "Organik", value: 160 },
  { name: "Anorganik", value: 269 },
];

const COLORS = ["#3498db", "#e74c3c", "#2ecc71", "#f1c40f"];

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-4 h-4 rounded" style={{ backgroundColor: color }}></div>
      <span className="text-sm text-gray-600">{label}</span>
    </div>
  );
}

export default function HistoryPage() {
  const total = DUMMY_DATA2.reduce((sum, entry) => sum + entry.value, 0);
  const router = useRouter();
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 px-4 py-6 gap-[12px]">
      {/* Header dengan back button dan logo */}
      <div className="w-full flex justify-between items-center mb-8 ">
        <button onClick={() => router.back()} className="p-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
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

      {/* Grafik */}
      <WhiteCard>
        <h1 className="text-4xl font-bold mb-2 text-black w-full text-left">
          Weekly Sortify Stats
        </h1>
        <p className="text-xl text-gray-600 mb-8 w-full text-left">
          {total} sort this week
        </p>
        <div className="w-full h-64 bg-gray-200 rounded-lg mt-4">
          {/* Grafik akan ditampilkan di sini */}
          <p className="relative w-full text-center text-black translate-y-[136px]">
            {total}
          </p>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={DUMMY_DATA2}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={75}
                paddingAngle={3}
                dataKey="value"
                stroke="none"
              >
                {DUMMY_DATA2.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
            {/* Angka tengah */}
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex flex-wrap gap-4">
          <LegendItem color="#3498db" label="Logam" />
          <LegendItem color="#e74c3c" label="B3" />
          <LegendItem color="#2ecc71" label="Organik" />
          <LegendItem color="#f1c40f" label="Anorganik" />
        </div>
      </WhiteCard>

      {/* History Sortify */}
      <WhiteCard>
        <div className="flex justify-between items-center w-full">
          <h1 className="text-black font-bold">History Sortify</h1>
          <div>Filter</div>
        </div>
        <p className="text-gray-400 text-left w-full text-[10px]">
          More than 700+ sort this week
        </p>
        <div className="w-full h-fit flex flex-col gap-[8px]">
          {DUMMY_DATA.map((item, index) => (
            <div className="flex justify-between items-center" key={index}>
              <div className="w-full">
                <h2 className="text-black text-[12px]">{item.trash}</h2>
                <p className="text-gray-400 text-[13px]">{item.date}</p>
              </div>
              <div className="w-[14px] aspect-square bg-gray-400"></div>
            </div>
          ))}
        </div>
      </WhiteCard>
    </div>
  );
}
