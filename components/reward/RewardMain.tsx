import Image from "next/image";

export default function RewardPage() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Navbar */}
      <nav className="fixed bottom-0 left-0 w-full bg-white flex justify-around p-3 shadow-md">
        <button>🏠 Home</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full">🔍 Scan</button>
        <button>⚙️ Settings</button>
      </nav>

      {/* Hero Section */}
      <section className="bg-white p-4 rounded-lg shadow-md mb-4">
        <h2 className="text-lg font-semibold">Hey Marshal!</h2>
        <p className="text-gray-500">Here is what you earned while using Sortify.</p>
        <div className="bg-blue-500 text-white p-4 rounded-lg mt-2">
          <p className="text-sm">Points Earned</p>
          <h3 className="text-2xl font-bold">20.000 Points</h3>
        </div>
      </section>

      {/* Checkpoint Section */}
      <section className="bg-white p-4 rounded-lg shadow-md mb-4 text-center">
        <h3 className="text-lg font-semibold">Checkpoint</h3>
        <div className="relative w-24 h-24 mx-auto my-4">
          {/* Placeholder for Circular Progress */}
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <path
              className="text-gray-300"
              strokeWidth="4"
              fill="none"
              stroke="currentColor"
              d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
            ></path>
            <path
              className="text-blue-500"
              strokeWidth="4"
              fill="none"
              strokeDasharray="70,100"
              stroke="currentColor"
              d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
            ></path>
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">20.000 / 24.000</span>
        </div>
      </section>

      {/* Redeem Points Section */}
      <section className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Redeem Points</h3>
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex justify-between items-center p-3 border rounded-lg mb-2">
            <div className="flex items-center">
              <Image src="/gopay.svg" alt="Gopay" width={30} height={30} />
              <span className="ml-2">10.000 Gopay</span>
            </div>
            <button className="bg-blue-500 text-white px-4 py-1 rounded-md">Redeem →</button>
          </div>
        ))}
      </section>
    </div>
  );
}
