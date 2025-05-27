import axios from "axios";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

const getUrl = () => {
  const isServer = typeof window === "undefined";
  return isServer
    ? process.env.INTERNAL_API_URL // server-side fetching
    : process.env.NEXT_PUBLIC_API_URL; // client-side fetching
};

interface Reward {
  id: string;
  userId: string;
  points: number;
  date: string;
  createdAt: string;
}

export const getUserRewards = async (
  cookieStore: ReadonlyRequestCookies
): Promise<Reward[]> => {
  try {
    const token = cookieStore.get("auth_token")?.value;

    if (!token) {
      throw new Error("Authentication token not found");
    }

    const response = await axios.get(`${getUrl()}/reward/mine`, {
      headers: {
        Cookie: `auth_token=${token}`,
      },
    });

    return response.data as Reward[];
  } catch (error) {
    console.error("Failed to fetch user rewards:", error);
    throw error;
  }
};

export const getTotalPoints = (rewards: Reward[]): number => {
  return rewards.reduce((total, reward) => total + reward.points, 0);
};
