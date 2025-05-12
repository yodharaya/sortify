"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { cn } from "@/helpers/utils"; // Adjusted import path
import { usePathname } from "next/navigation";

export default function BottomBar() {
  const router = useRouter();
  const pathname = usePathname();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  const isActive = (path: string) => pathname === path;

  // Modified the layout of menu items to match the screenshot
  const menuItems = [
    { name: "Home", icon: "/all-page/bottom-bar/home.svg", path: "/home" },
    { name: "Reward", icon: "/all-page/bottom-bar/reward.svg", path: "/reward" },
    { name: "History", icon: "/all-page/bottom-bar/history.svg", path: "/history" },
    { name: "Setting", icon: "/all-page/bottom-bar/setting.svg", path: "/setting" },
  ];

  return (
    <>
      {/* Scan Button - positioned in the absolute center */}
      <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2 z-20">
        <button className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110">
          <Image
            src="/all-page/bottom-bar/scan.svg"
            alt="Scan"
            width={30}
            height={30}
          />
        </button>
      </div>

      {/* Bottom Navigation - restructured to match the screenshot */}
      <div className="fixed bottom-0 left-0 right-0 bg-white py-2 border-t border-gray-200 z-10">
        <div className="grid grid-cols-4 gap-0">
          {/* First two menu items (left side) */}
          <div
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => navigateTo(menuItems[0].path)}
          >
            <Image
              src={menuItems[0].icon}
              alt={menuItems[0].name}
              width={24}
              height={24}
              className={cn(
                "transition-colors duration-200 group-hover:text-blue-600",
                isActive(menuItems[0].path) ? "brightness-0" : ""
              )}
            />
            <span
              className={cn(
                "text-xs mt-1 transition-colors duration-200 group-hover:text-blue-600 font-bold",
                isActive(menuItems[0].path) ? "text-black" : "text-gray-500"
              )}
            >
              {menuItems[0].name}
            </span>
          </div>
          
          <div
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => navigateTo(menuItems[1].path)}
          >
            <Image
              src={menuItems[1].icon}
              alt={menuItems[1].name}
              width={24}
              height={24}
              className={cn(
                "transition-colors duration-200 group-hover:text-blue-600",
                isActive(menuItems[1].path) ? "brightness-0" : ""
              )}
            />
            <span
              className={cn(
                "text-xs mt-1 transition-colors duration-200 group-hover:text-blue-600 font-bold",
                isActive(menuItems[1].path) ? "text-black" : "text-gray-500"
              )}
            >
              {menuItems[1].name}
            </span>
          </div>
          
          {/* Last two menu items (right side) */}
          <div
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => navigateTo(menuItems[2].path)}
          >
            <Image
              src={menuItems[2].icon}
              alt={menuItems[2].name}
              width={24}
              height={24}
              className={cn(
                "transition-colors duration-200 group-hover:text-blue-600",
                isActive(menuItems[2].path) ? "brightness-0" : ""
              )}
            />
            <span
              className={cn(
                "text-xs mt-1 transition-colors duration-200 group-hover:text-blue-600 font-bold",
                isActive(menuItems[2].path) ? "text-black" : "text-gray-500"
              )}
            >
              {menuItems[2].name}
            </span>
          </div>
          
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => navigateTo(menuItems[3].path)}
          >
            <Image
              src={menuItems[3].icon}
              alt={menuItems[3].name}
              width={24}
              height={24}
              className={cn(
                "transition-colors duration-200 group-hover:text-blue-600",
                isActive(menuItems[3].path) ? "brightness-0" : ""
              )}
            />
            <span
              className={cn(
                "text-xs mt-1 transition-colors duration-200 group-hover:text-blue-600 font-bold",
                isActive(menuItems[3].path) ? "text-black" : "text-gray-500"
              )}
            >
              {menuItems[3].name}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}