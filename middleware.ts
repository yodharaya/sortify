import { NextRequest, NextResponse } from "next/server";
import { verifySession } from "./helpers/auth";

export async function middleware(request: NextRequest) {
  const authToken = request.cookies.get("auth_token")?.value;

  if (!authToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    await verifySession(authToken);

    return NextResponse.next();
  } catch (error) {
    console.log("Session verification failed:", error);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    "/",
    "/((?!api|_next/static|_next/image|favicon.ico|login|signup|verification).+)",
  ],
};
