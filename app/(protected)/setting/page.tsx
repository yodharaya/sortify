"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import BottomBar from "@/components/bottom/bottomnav";

export default function SettingsPage() {
  const router = useRouter();

  // Menu items data
  const accountMenuItems = [
    { name: "Profile", icon: "/setting-page/profile.svg", path: "/profile" },
    { name: "Password", icon: "/setting-page/password.svg", path: "/password" },
    { name: "Notifications", icon: "/setting-page/notif.svg", path: "/notifications" }
  ];

  const moreMenuItems = [
    { name: "Help", icon: "/setting-page/help.svg", path: "/help" }
  ];

  const handleMenuItemClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="py-4 px-6 bg-white flex items-center">
        <Image
          src="/all-page/logo.svg"
          alt="Sortify Logo"
          width={120}
          height={36}
        />
      </header>

      {/* Profile Card */}
      <div className="mx-4 mt-4 bg-blue-600 rounded-lg p-4 flex items-center">
        <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden mr-4">
          <Image
            src="/api/placeholder/80/80"
            alt="Profile"
            width={80}
            height={80}
          />
        </div>
        <div className="text-white">
          <h2 className="font-bold text-lg">Marshall Ajunna</h2>
          <p className="text-sm">20,000 Points</p>
        </div>
      </div>

      {/* Account Section */}
      <div className="px-4 mt-6">
        <h3 className="text-lg font-bold mb-2">Account</h3>
        <div className="bg-white rounded-lg overflow-hidden">
          {accountMenuItems.map((item, index) => (
            <div 
              key={index} 
              className={`flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition ${
                index !== accountMenuItems.length - 1 ? "border-b border-gray-100" : ""
              }`}
              onClick={() => handleMenuItemClick(item.path)}
            >
              <div className="flex items-center">
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={24}
                  height={24}
                  className="mr-4"
                />
                <span>{item.name}</span>
              </div>
              <Image
                src="/setting-page/arrow.svg"
                alt="Arrow"
                width={24}
                height={24}
              />
            </div>
          ))}
        </div>
      </div>

      {/* More Section */}
      <div className="px-4 mt-6">
        <h3 className="text-lg font-bold mb-2">More</h3>
        <div className="bg-white rounded-lg overflow-hidden">
          {moreMenuItems.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition"
              onClick={() => handleMenuItemClick(item.path)}
            >
              <div className="flex items-center">
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={24}
                  height={24}
                  className="mr-4"
                />
                <span>{item.name}</span>
              </div>
              <Image
                src="/setting-page/arrow.svg"
                alt="Arrow"
                width={24}
                height={24}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Import BottomBar component instead of using inline navigation */}
      <BottomBar />
    </div>
  );
}