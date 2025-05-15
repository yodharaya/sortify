import { UserProvider } from "@/context/user-context";
import { cookies } from "next/headers";
import { getCurrentUser } from "@/helpers/user";
import BottomBar from "@/components/bottom/bottomnav";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const user = await getCurrentUser(cookieStore);

  return (
    <UserProvider initialUser={user}>
      {children}
      <div className="absolute bottom-0 left-0 w-full z-30">
        <BottomBar />
      </div>
    </UserProvider>
  );
}
