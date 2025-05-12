"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import BottomBar from "@/components/bottom/bottomnav";

export default function ChangePasswordPage() {
  const router = useRouter();
  const [previousPassword, setPreviousPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSave = () => {
    // Validasi sederhana
    if (!previousPassword || !newPassword || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("New passwords do not match.");
      return;
    }

    // Clear error dan redirect
    setError("");
    router.push("/setting");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 px-4 pt-6 pb-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => router.back()}>
          <Image
            src="/setting-page/back.svg"
            alt="Back"
            width={24}
            height={24}
          />
        </button>
        <h1 className="font-bold text-md">Change Password</h1>
        <Image
          src="/all-page/logo.svg"
          alt="Sortify Logo"
          width={90}
          height={36}
        />
      </div>

      {/* Form */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Previous Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white"
            value={previousPassword}
            onChange={(e) => setPreviousPassword(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">New Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">*Confirm New Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          onClick={handleSave}
          className="w-fit bg-blue-600 text-white px-6 py-2 rounded-md mt-2"
        >
          Save Password
        </button>
      </div>

      {/* Bottom Bar */}
      <BottomBar />
    </div>
  );
}
