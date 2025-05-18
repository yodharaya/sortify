import axios from "axios";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

const URL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_PRODUCTION_URL
    : process.env.NEXT_PUBLIC_DEVELOPMENT_URL;

interface Classification {
  wasteCategory: {
    name: string;
    bin: {
      name: string;
      image: string;
    };
  };
}

export interface UserClassification {
  createdAt: Date;
  wasteCategory: {
    name: string;
  };
}

export const getClassificationById = async (
  classificationId: string
): Promise<{ category: string; binImage: string }> => {
  try {
    const response = await axios.get<Classification>(
      `${URL}/classification/${classificationId}`
    );

    return {
      category: response.data.wasteCategory.name,
      binImage: response.data.wasteCategory.bin.image,
    };
  } catch (error) {
    console.error("Failed to fetch classification data:", error);
    throw error;
  }
};

export const getUserClassifications = async (
  cookieStore: ReadonlyRequestCookies
): Promise<UserClassification[]> => {
  const token = cookieStore.get("auth_token")?.value;

  if (!token) {
    throw new Error("Authentication token not found");
  }

  try {
    const response = await axios.get<UserClassification[]>(
      `${URL}/classification/mine`,
      {
        headers: {
          Cookie: `auth_token=${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch user classifications:", error);
    throw error;
  }
};
