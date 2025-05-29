import axios from "axios";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

const getUrl = () => {
  const isServer = typeof window === "undefined";
  return isServer
    ? process.env.INTERNAL_API_URL // server-side fetching
    : process.env.NEXT_PUBLIC_API_URL; // client-side fetching
};

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

interface WeeklyProgressResponse {
  percentage: {
    organik: number;
    anorganik: number;
    b3: number;
  };
  count: {
    organik: number;
    anorganik: number;
    b3: number;
  };
}

interface ClassificationResult {
  isSuccess: boolean;
  points: number;
  wasteCategory: string;
  binCategory: string;
}

export const getClassificationById = async (
  classificationId: string
): Promise<{ category: string; binImage: string }> => {
  try {
    const response = await axios.get<Classification>(
      `${getUrl()}/classification/${classificationId}`
    );

    return {
      category: response.data.wasteCategory.name,
      binImage: response.data.wasteCategory.bin.image,
    };
  } catch (error) {
    console.log("Failed to fetch classification data:", error);
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
      `${getUrl()}/classification/mine`,
      {
        headers: {
          Cookie: `auth_token=${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("Failed to fetch user classifications:", error);
    throw error;
  }
};

export const getWeeklyProgress = async (
  cookieStore: ReadonlyRequestCookies
): Promise<WeeklyProgressResponse> => {
  const token = cookieStore.get("auth_token")?.value;

  if (!token) {
    throw new Error("Authentication token not found");
  }

  try {
    const response = await axios.get(
      `${getUrl()}/classification/weekly-progress`,
      {
        headers: {
          Cookie: `auth_token=${token}`,
        },
      }
    );

    return response.data as WeeklyProgressResponse;
  } catch (error) {
    console.log("Failed to fetch weekly progress data:", error);
    throw error;
  }
};

export const classifyWaste = async (imageFile: File): Promise<string> => {
  try {
    const formData = new FormData();
    formData.append("file", imageFile);

    const response = await axios.post<{ classificationId: string }>(
      `${getUrl()}/classification/waste`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );

    return response.data.classificationId;
  } catch (error) {
    console.log("Failed to classify waste:", error);
    throw error;
  }
};

export const classifyBin = async (
  imageFile: File,
  classificationId: string
): Promise<string> => {
  try {
    const formData = new FormData();
    formData.append("file", imageFile);

    const response = await axios.post<{ classificationId: string }>(
      `${getUrl()}/classification/bin/${classificationId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );

    return response.data.classificationId;
  } catch (error) {
    console.log("Failed to classify bin:", error);
    throw error;
  }
};

export const getClassificationResult = async (
  classificationId: string
): Promise<ClassificationResult> => {
  try {
    const response = await axios.get<ClassificationResult>(
      `${getUrl()}/classification/result/${classificationId}`
    );
    return response.data;
  } catch (error) {
    console.log("Failed to fetch classification reward:", error);
    throw error;
  }
};
