import Image from "next/image";
import Link from "next/link";

export default function ScanSuccessPage() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Blue background with curved bottom using SVG */}
      <div className="relative h-[260px] bg-[#3674B5]">
        <h1 className="text-white text-xl font-bold text-center pt-10 z-10 relative">
          Scan Completed!
        </h1>
        
        {/* Curved SVG */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 375 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C125,80 250,80 375,0 L375,80 L0,80 Z"
            fill="#3674B5"
          />
        </svg>

        {/* Splash icon */}
        <div className="absolute top-[170px] left-1/2 transform -translate-x-1/2 z-10">
  <div className="bg-white p-4 rounded-full shadow-lg w-[140px] h-[140px] flex items-center justify-center">
    <Image
      src="/scan-page/rewardscan.svg"
      alt="Reward Icon"
      width={100}
      height={100}
    />
  </div>
</div>

      </div>

      {/* Main content below icon */}
      <div className="mt-28 px-6 text-center">
        <h2 className="text-[#3674B5] text-lg font-bold mb-2">+ 100 Points</h2>
        <p className="text-gray-800 mb-6">
          Your waste has been scanned and placed in the correct bin.
        </p>
        <Link href="/" className="inline-block bg-[#3674B5] text-white font-semibold px-6 py-3 rounded-lg">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}