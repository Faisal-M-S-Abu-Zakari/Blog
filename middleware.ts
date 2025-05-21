import { NextRequest } from "next/server";

export { auth as middleware } from "@/auth";

// This is a middleware function that is called for all requests in the config matcher
export default function middleware(req: NextRequest) {
  console.log("middleware called for :", req.nextUrl.pathname);
}

// This is a configuration object that specifies the routes that the middleware should be applied to
export const config = {
  matcher: ["/login", "/signup"],
};
