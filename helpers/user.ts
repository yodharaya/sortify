import axios from "axios";
import { User } from "@/context/user-context";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

const getUrl = () => {
  const isServer = typeof window === "undefined";
  return isServer
    ? process.env.INTERNAL_API_URL // server-side fetching
    : process.env.NEXT_PUBLIC_API_URL; // client-side fetching
};

export const getCurrentUser = async (
  cookieStore: ReadonlyRequestCookies
): Promise<User> => {
  try {
    const token = cookieStore.get("auth_token")?.value;

    if (!token) {
      throw new Error("Authentication token not found");
    }

    const response = await axios.get(`${getUrl()}/user/me`, {
      headers: {
        Cookie: `auth_token=${token}`,
      },
    });

    const user = response.data as User;

    return user;
  } catch (error) {
    console.error("Failed to fetch user data:", error);
    throw error;
  }
};

export const editUser = async (formData: FormData): Promise<User> => {
  try {
    const response = await axios.patch(`${getUrl()}/user/me`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    });

    return response.data as User;
  } catch (error) {
    console.error("Failed to update user data:", error);
    throw error;
  }
};

interface PasswordUpdateData {
  currentPassword: string;
  newPassword: string;
}

export const editPassword = async (data: PasswordUpdateData): Promise<void> => {
  try {
    await axios.patch(`${getUrl()}/user/password/mine`, data, {
      withCredentials: true,
    });
  } catch (error) {
    console.error("Failed to update password:", error);
    throw error;
  }
};
