import { NextResponse } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isHomeRoute = createRouteMatcher(["/"]);
const isClerkConfigured = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

const middleware = isClerkConfigured
    ? clerkMiddleware((auth, req) => {
        const { userId } = auth();

        // if there is user and home route is accessed, redirect to dashboard or any other protected route
        if (userId && isHomeRoute(req)) {
            return NextResponse.rewrite(new URL("/", req.url));
        }
    })
    : (_req: Request) => NextResponse.next();

export default middleware;

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
