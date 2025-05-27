import axios from "axios";

const getUrl = () => {
  const isServer = typeof window === "undefined";
  return isServer
    ? process.env.INTERNAL_API_URL // server-side fetching
    : process.env.NEXT_PUBLIC_API_URL; // client-side fetching
};

export const classifyWaste = async (imageFile: File): Promise<string> => {
  try {
    const formData = new FormData();
    formData.append("file", imageFile);

    const response = await axios.post<{ classificationId: string }>(
      `${getUrl()}/waste/classify`,
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
