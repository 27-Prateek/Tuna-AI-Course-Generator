// // // import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// // // const isPublicRoute = createRouteMatcher([
// // //   "/",                         // landing page
// // //   "/sign-in(.*)",
// // //   "/sign-up(.*)",
// // //   "/.well-known(.*)",

// // //   // ✅ PUBLIC COURSE ROUTES
// // //   "/course/(.*)",
  
// // //          // course/[courseId] + chapters
// // // ]);

// // // export default clerkMiddleware((auth, req) => {
// // //   if (!isPublicRoute(req)) {
// // //     auth.protect();
// // //   }
// // // });

// // // export const config = {
// // //   matcher: [
// // //     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|png|svg|woff2?|ico)).*)",
// // //     "/api/(.*)",
// // //   ],
// // // };


// // import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// // const isPublicRoute = createRouteMatcher([
  
// //   "/sign-in(.*)",
// //   "/sign-up(.*)",
// //   "/.well-known(.*)",

// //   "/course/(.*)",
// //  "/favicon.ico",
// //   "/logo.svg",
  
// //   // ✅ WEBHOOKS MUST BE PUBLIC
// //   "/api/webhooks/(.*)",
// // ]);

// // export default clerkMiddleware((auth, req) => {
// //   if (!isPublicRoute(req)) {
// //     auth.protect();
// //   }
// // });

// // export const config = {
// //   matcher: [
// //     "/((?!_next/static|_next/image|favicon.ico).*)",
// //     "/api/(.*)",
// //   ],
// // };
// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// const isPublicRoute = createRouteMatcher([
//   // 🔓 Auth pages
//   "/sign-in(.*)",
//   "/sign-up(.*)",

//   // 🔓 Well-known (OAuth, etc.)
//   "/.well-known(.*)",

//   // 🔓 Public pages
//   "/course/(.*)",
//   "public/(.*)",

//   // 🔓 Static assets (CRITICAL)
//   "/favicon.ico",
//   "/.*\\.png",
//   "/.*\\.jpg",
//   "/.*\\.jpeg",
//   "/.*\\.svg",
//   "/.*\\.webp",

//   // 🔓 Webhooks must be public
//   "/api/webhooks/(.*)",
// ]);

// export default clerkMiddleware((auth, req) => {
//   if (!isPublicRoute(req)) {
//     auth.protect();
//   }
// });

// export const config = {
//   matcher: [
//     // Run on everything except Next internals
//     "/((?!_next).*)",
//   ],
// };
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  // 🔓 Auth pages
  "/sign-in(.*)",
  "/sign-up(.*)",

  // 🔓 Well-known
  "/.well-known(.*)",

  // 🔓 Public pages
  "/course/(.*)",

  // 🔓 Static assets (FIXED syntax)
  "/favicon.ico",
  "/(.*).png",
  "/(.*).jpg",
  "/(.*).jpeg",
  "/(.*).svg",
  "/(.*).webp",

  // 🔓 Webhooks
  "/api/webhooks/(.*)",
]);

export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) {
    auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next).*)",
  ],
};
