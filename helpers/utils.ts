// helpers/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to merge Tailwind classes conditionally
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}
