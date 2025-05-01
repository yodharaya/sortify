import { toast } from "react-hot-toast";

export const toastServerError = (error: unknown) => {
  const message = getServerErrorMessage(error);
  toast.error(message);
};

export const getServerErrorMessage = (error: unknown): string => {
  if (typeof error === "object" && error !== null && "response" in error) {
    const responseData = (error as any).response?.data;

    if (Array.isArray(responseData?.message)) {
      return responseData.message[0] || "Unexpected server response";
    }

    if (typeof responseData?.message === "string") {
      return responseData.message;
    }
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Unexpected server response";
};
