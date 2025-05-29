import Image from "next/image";
import { verifyUser } from "@/helpers/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function EmailVerificationSuccess({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const param = await searchParams;
  const token = param.token;

  if (!token) {
    redirect("/error?message=Missing token");
  }

  try {
    await verifyUser(token);
  } catch (error) {
    console.log("Verification failed:", error);
    redirect("/error?message=Verification failed");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
      <h1 className="text-3xl font-bold mb-2 text-center">Welcome!</h1>
      <p className="text-lg text-gray-600 mb-6 text-center">
        Email Verification Success
      </p>

      <div className="w-48 h-48 mb-8">
        <Image
          src="/verification/verification.svg"
          alt="Verification Success"
          width={192}
          height={192}
        />
      </div>

      <Link href="/">
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-8 py-3 rounded-full">
          Go to Dashboard
        </button>
      </Link>
    </div>
  );
}
