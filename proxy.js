// // // // // import { clerkMiddleware } from '@clerk/nextjs/server';

// // // // // const isProtectedRoute=createRouteMatcher(
// // // // //   ['dashboard(.*)']
// // // // // )
// // // // // export default clerkMiddleware();
// // // // import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// // // // const isProtectedRoute = createRouteMatcher([
// // // //   '/dashboard(.*)',
// // // // ]);

// // // // export default clerkMiddleware((auth, req) => {
// // // //   if (isProtectedRoute(req)) {
// // // //     auth().protect();
// // // //   }
// // // // });
// // // // export const config = {
// // // //   matcher: [
// // // //     // Skip Next.js internals and all static files, unless found in search params
// // // //     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
// // // //     // Always run for API routes
// // // //     '/(api|trpc)(.*)',
// // // //   ],
// // // // };

// // // import { clerkMiddleware } from '@clerk/nextjs/server';

// // // export default clerkMiddleware();

// // // export const config = {
// // //   matcher: [
// // //     // Skip Next.js internals and all static files, unless found in search params
// // //     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
// // //     // Always run for API routes
// // //     '/(api|trpc)(.*)',
// // //   ],
// // // };
// // import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// // const isProtectedRoute = createRouteMatcher([
// //   '/dashboard(.*)',
// // ]);

// // export default clerkMiddleware((auth, req) => {
// //   if (isProtectedRoute(req)) {
// //     auth().protect();
// //   }
// // });

// // export const config = {
// //   matcher: [
// //     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
// //     '/(api|trpc)(.*)',
// //   ],
// // };
// // import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
// // import { NextResponse } from 'next/server'

// // const isProtectedRoute = createRouteMatcher([
// //   '/dashboard(.*)',
// // ])

// // export default clerkMiddleware((auth, req) => {
// //   const { userId } = auth()

// //   if (isProtectedRoute(req) && !userId) {
// //     return NextResponse.redirect(new URL('/sign-in', req.url))
// //   }

// //   return NextResponse.next()
// // })

// // export const config = {
// //   matcher: [
// //     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
// //     '/(api|trpc)(.*)',
// //   ],
// // }
// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// const isProtectedRoute = createRouteMatcher([
//   '/dashboard(.*)',
// ])

// export default clerkMiddleware((auth, req) => {
//   if (isProtectedRoute(req) && !auth().userId) {
//     return auth().redirectToSignIn({
//       returnBackUrl: req.url,
//     })
//   }
// })

// export const config = {
//   matcher: [
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     '/(api|trpc)(.*)',
//   ],
// }

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

// const isProtectedRoute = createRouteMatcher([
//   '/dashboard(.*)',
// ])

// export default clerkMiddleware((auth, req) => {
//   const { userId } = auth()

//   if (isProtectedRoute(req) && !userId) {
//     const signInUrl = new URL('/sign-in', req.url)
//     signInUrl.searchParams.set('redirect_url', req.url)

//     return NextResponse.redirect(signInUrl)
//   }

//   return NextResponse.next()
// })



const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/.well-known(.*)",
]);

export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) {
    auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|png|svg|woff2?|ico)).*)",
    "/(api|trpc)(.*)",
  ],
};
