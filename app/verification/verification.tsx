import Image from "next/image";

export default function EmailVerificationSuccess() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
      <h1 className="text-3xl font-bold mb-2 text-center">Welcome!</h1>
      <p className="text-lg text-gray-600 mb-6 text-center">Email Verification Success</p>

      <div className="w-48 h-48 mb-8">
        <Image
          src="/verification/verification.svg"
          alt="Verification Success"
          width={192}
          height={192}
        />
      </div>

      <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-8 py-3 rounded-full">
        Go to Dashboard
      </button>
    </div>
  );
}
