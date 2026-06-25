import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

function extractPath(val?: string, fallback = "/") {
  if (!val) return fallback;
  try {
    return new URL(val).pathname.replace(/\/$/, "") || fallback;
  } catch {
    return val.replace(/\/$/, "");
  }
}

const signInPath = extractPath(process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL, "/sign-in");
const signUpPath = extractPath(process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL, "/sign-up");

const isPublicRoute = createRouteMatcher([
  "/",
  `${signInPath}(.*)`,
  `${signUpPath}(.*)`,
]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
