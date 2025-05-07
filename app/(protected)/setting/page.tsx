"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const router = useRouter();

  // Menu items data
  const accountMenuItems = [
    { name: "Profile", icon: "/setting-page/profile.svg", path: "/profile" },
    { name: "Password", icon: "/setting-page/password.svg", path: "/password" },
    { name: "Notifications", icon: "/setting-page/notif.svg", path: "/notifications" }
  ];

  const moreMenuItems = [
    { name: "Rate & Review", icon: "/setting-page/rate.svg", path: "/rate-review" },
    { name: "Help", icon: "/setting-page/help.svg", path: "/help" }
  ];

  // Handle menu item click
  const handleMenuItemClick = (path: string) => {
    router.push(path);
  };

  // Bottom navigation handler
  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
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
              className={`flex items-center justify-between p-4 cursor-pointer ${
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
              className={`flex items-center justify-between p-4 cursor-pointer ${
                index !== moreMenuItems.length - 1 ? "border-b border-gray-100" : ""
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

      {/* Scan Button */}
      <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2">
        <button className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
          <Image 
            src="/all-page/bottom-bar/scan.svg" 
            alt="Scan" 
            width={24} 
            height={24} 
          />
        </button>
        <span className="text-xs text-center block mt-1 text-blue-600 font-medium">Scan!</span>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white py-2 border-t border-gray-200 flex justify-around">
        <div 
          className="flex flex-col items-center cursor-pointer" 
          onClick={() => navigateTo("/home")}
        >
          <Image 
            src="/all-page/bottom-bar/home.svg" 
            alt="Home" 
            width={24} 
            height={24} 
          />
          <span className="text-xs mt-1 text-gray-500">Home</span>
        </div>
        <div 
          className="flex flex-col items-center cursor-pointer" 
          onClick={() => navigateTo("/reward")}
        >
          <Image 
            src="/all-page/bottom-bar/reward.svg" 
            alt="Reward" 
            width={24} 
            height={24} 
          />
          <span className="text-xs mt-1 text-gray-500">Reward</span>
        </div>
        <div className="w-12"></div> {/* Spacer for scan button */}
        <div 
          className="flex flex-col items-center cursor-pointer" 
          onClick={() => navigateTo("/history")}
        >
          <Image 
            src="/all-page/bottom-bar/history.svg" 
            alt="History" 
            width={24} 
            height={24} 
          />
          <span className="text-xs mt-1 text-gray-500">History</span>
        </div>
        <div 
          className="flex flex-col items-center cursor-pointer"
        >
          <Image 
            src="/all-page/bottom-bar/setting.svg" 
            alt="Setting" 
            width={24} 
            height={24} 
          />
          <span className="text-xs mt-1 text-blue-600 font-medium">Setting</span>
        </div>
      </div>
    </div>
  );
}