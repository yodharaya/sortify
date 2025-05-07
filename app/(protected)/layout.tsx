import { UserProvider } from "@/context/user-context";
import { cookies } from "next/headers";
import { getCurrentUser } from "@/helpers/user";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const user = await getCurrentUser(cookieStore);

  return <UserProvider initialUser={user}>{children}</UserProvider>;
}
