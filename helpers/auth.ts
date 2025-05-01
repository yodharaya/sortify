import axios from "axios";
import bcrypt from "bcryptjs";

const URL =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_PRODUCTION_URL
    : process.env.NEXT_PUBLIC_DEVELOPMENT_URL;

const SALT_ROUNDS = process.env.SALT_ROUNDS || 10;

export const signup = async (email: string, password: string, name: string) => {
  const hashedPassword = await hashPassword(password);

  const response = await axios.post(`${URL}/auth/sign-up`, {
    name,
    email,
    hashedPassword,
  });
  return response.data;
};

const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(Number(SALT_ROUNDS));
  return await bcrypt.hash(password, salt);
};
