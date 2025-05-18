import axios from "axios";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

const URL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_PRODUCTION_URL
    : process.env.NEXT_PUBLIC_DEVELOPMENT_URL;

export const classifyWaste = async (imageFile: File): Promise<string> => {
  try {
    const formData = new FormData();
    formData.append("file", imageFile);

    const response = await axios.post<{ classificationId: string }>(
      `${URL}/waste/classify`,
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
    console.error("Failed to classify waste:", error);
    throw error;
  }
};
