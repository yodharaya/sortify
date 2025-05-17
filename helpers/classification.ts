import axios from "axios";

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
