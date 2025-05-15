import axios from "axios";
import { User } from "@/context/user-context";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

const URL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_PRODUCTION_URL
    : process.env.NEXT_PUBLIC_DEVELOPMENT_URL;

export const getCurrentUser = async (
  cookieStore: ReadonlyRequestCookies
): Promise<User> => {
  try {
    const token = document.cookie
  .split('; ')
  .find((row) => row.startsWith('auth_token='))
  ?.split('=')[1];

    if (!token) {
      throw new Error("Authentication token not found");
    }

    const response = await axios.get(`${URL}/user/me`, {
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
