import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

const authRoutes = ["/login", "/signup"];

export async function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const path = nextUrl.pathname;

  const session = await auth();
  const isUserLoggedIn = Boolean(session);

  if (authRoutes.includes(path) && isUserLoggedIn) {
    return NextResponse.redirect(new URL("/home", nextUrl));
  }
}

export const config = {
  matcher: ["/login", "/signup", "/home"],
};
