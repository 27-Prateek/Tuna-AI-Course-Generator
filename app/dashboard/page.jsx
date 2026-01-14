// // import React from 'react'
// // import {UserButton} from '@clerk/nextjs'
// // import AddCourse from './_components/AddCourse'
// // function page() {   
// //   return (
// //     <div>
// //       <AddCourse/>
      
// //     </div>

// //   )
// // }
  
// // export default page
// "use client";

// import AddCourse from "./_components/AddCourse";

// export default function DashboardPage() {
//   return (
//     <div>
//       <AddCourse />
//     </div>
//   );
// }
"use client";

import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import AddCourse from "./_components/AddCourse";

export default function DashboardPage() {
  return (
    <>
      <SignedIn>
        <AddCourse />
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
