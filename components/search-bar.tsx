import { twMerge } from "tailwind-merge";

export default function SearchBar() {
  return (
    <input
      type="text"
      placeholder="Search..."
      className={twMerge(
        "w-full px-3 py-2 rounded-2xl border border-gray-300 bg-white text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
      )}
    />
  )
}
