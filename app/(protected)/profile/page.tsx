"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useUser } from "@/context/user-context";
import BottomBar from "@/components/bottom/bottomnav";
import { editUser } from "@/helpers/user";
import { toastServerError } from "@/helpers/server";

export default function ProfilePage() {
  const router = useRouter();
  const { user, setUser } = useUser();
  const [username, setUsername] = useState(user!.name);
  const [gender, setGender] = useState("Prefer not to say");
  const [profilePic, setProfilePic] = useState(user!.imageUrl);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("name", username);

      if (profilePic.startsWith("blob:")) {
        const response = await fetch(profilePic);
        const blob = await response.blob();
        formData.append("file", blob, "profile.jpg");
      }

      const updatedUser = await editUser(formData);
      setUser(updatedUser);
      router.push("/setting");
    } catch (error) {
      toastServerError(error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {!user ? (
        <div className="flex items-center justify-center h-screen">
          <p>Loading...</p>
        </div>
      ) : (
        <>
          {/* Header */}
          <div className="relative p-4 flex items-center justify-between">
            <button onClick={() => router.back()}>
              <Image
                src="/setting-page/back.svg"
                alt="Back"
                width={10}
                height={10}
              />
            </button>
            <Image
              src="/all-page/logo.svg"
              alt="Sortify Logo"
              width={100}
              height={36}
            />
            <div className="w-6" /> {/* Spacer */}
          </div>

          {/* Profile Picture */}
          <div className="flex flex-col items-center mt-4">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-300">
              <Image src={profilePic} alt="Profile" width={96} height={96} />
            </div>
            <label className="text-blue-600 mt-2 cursor-pointer text-sm underline">
              Edit Picture
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>

          {/* Form */}
          <div className="px-6 mt-6 space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Gender
              </label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Male</option>
                <option>Female</option>
                <option>Prefer not to say</option>
              </select>
            </div>

            <button
              onClick={handleSave}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold mt-4 hover:bg-blue-700 transition"
            >
              Save
            </button>
          </div>

          {/* Bottom Navigation */}
          <div className="mt-auto">
            <BottomBar />
          </div>
        </>
      )}
    </div>
  );
}
