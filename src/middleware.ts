import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Clerk middleware disabled for local development to avoid missing publishableKey errors.
// If you want to enable Clerk, restore the original middleware and set env vars.
export default function middleware(_req: NextRequest) {
    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
