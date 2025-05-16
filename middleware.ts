// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { verifySession } from "./helpers/auth"; // pastikan ini sesuai path asli

export async function middleware(request: NextRequest) {
  // Ambil cookie dari request
  const authToken = request.cookies.get("auth_token")?.value;
  console.log("Auth token in middleware:", authToken); // Debugging

  // Jika tidak ada token, redirect ke login
  if (!authToken) {
    console.log("No auth token, redirecting to /login");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Verifikasi sesi dari token
  try {
    await verifySession(authToken);
    // Jika sukses, lanjutkan request
    return NextResponse.next();
  } catch (error) {
    console.error("Token verification failed:", error);
    // Jika verifikasi gagal, redirect ke login
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// Konfigurasi path yang dilindungi oleh middleware
export const config = {
  matcher: [
    "/((?!api|_next/|favicon.ico|login|signup|verification).*)",
  ],
};
