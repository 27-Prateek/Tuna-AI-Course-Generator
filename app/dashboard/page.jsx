// // // "use client";

// // // import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
// // // import AddCourse from "./_components/AddCourse";

// // // export default function DashboardPage() {
// // //   return (
// // //     <>
// // //       <SignedIn>
// // //         <AddCourse />
// // //       </SignedIn>

// // //       <SignedOut>
// // //         <RedirectToSignIn />
// // //       </SignedOut>
// // //     </>
// // //   );
// // // }
// // "use client";

// // import { useEffect, useState } from "react";
// // import { useUser } from "@clerk/nextjs";
// // import AddCourse from "./_components/AddCourse";
// // import CourseGrid from "./_components/CourseGrid";
// // import { getUserCourses } from "@/app/actions/getUserCourses";

// // export default function DashboardPage() {
// //   const { user, isLoaded } = useUser();
// //   const [courses, setCourses] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     if (!isLoaded || !user) return;
// //     fetchCourses();
// //   }, [isLoaded, user]);

// //   const fetchCourses = async () => {
// //     setLoading(true);
// //     const result = await getUserCourses(
// //       user.primaryEmailAddress.emailAddress
// //     );
// //     setCourses(result || []);
// //     setLoading(false);
// //   };

// //   return (
// //     <div>
// //       {/* Greeting + CTA */}
// //       <AddCourse />

// //       <hr className="my-8" />

// //       <h2 className="text-xl font-semibold mb-4">
// //         Your Courses
// //       </h2>

// //       {loading ? (
// //         <div className="text-gray-500 py-10">
// //           Loading courses...
// //         </div>
// //       ) : (
// //         <CourseGrid courses={courses} />
// //       )}
// //     </div>
// //   );
// // }
// "use client";

// import { useEffect, useState } from "react";
// import { useUser } from "@clerk/nextjs";
// import AddCourse from "./_components/AddCourse";
// import CourseGrid from "./_components/CourseGrid";
// import CourseGridSkeleton from "./_components/CourseGridSkeleton";
// import { getUserCourses } from "@/app/actions/getUserCourses";

// export default function DashboardPage() {
//   const { user, isLoaded } = useUser();
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!isLoaded || !user) return;
//     fetchCourses();
//   }, [isLoaded, user]);

//   const fetchCourses = async () => {
//     setLoading(true);
//     const result = await getUserCourses(
//       user.primaryEmailAddress.emailAddress
//     );
//     setCourses(result || []);
//     setLoading(false);
//   };

//   return (
//     <div>
//       {/* Header */}
//       <AddCourse />

//       <hr className="my-8" />

//       <h2 className="text-xl font-semibold mb-4">
//         Your Courses
//       </h2>

//       {/* 🔹 Skeleton OR Cards */}
//       {loading ? (
//         <CourseGridSkeleton />
//       ) : (
//         <CourseGrid courses={courses} />
//       )}
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  useUser,
} from "@clerk/nextjs";


import AddCourseWrapper from "./_components/AddCourse";
import CourseGrid from "./_components/CourseGrid";
import CourseGridSkeleton from "./_components/CourseGridSkeleton";
import { getUserCourses } from "@/app/actions/getUserCourses";

function DashboardContent() {
  const { user, isLoaded } = useUser();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoaded || !user) return;
    fetchCourses();
  }, [isLoaded, user]);

  const fetchCourses = async () => {
    setLoading(true);
    const result = await getUserCourses(
      user.primaryEmailAddress.emailAddress
    );
    setCourses(result || []);
    setLoading(false);
  };

  return (
    <div>
      {/* Greeting + CTA */}
      <AddCourseWrapper />

      <hr className="my-8" />

      <h2 className="text-xl font-semibold mb-4">
        Your Courses
      </h2>

      {loading ? (
        <CourseGridSkeleton />
      ) : (
        <CourseGrid courses={courses} />
      )}
    </div>
  );
}

export default function DashboardPage() {
  return (
    <>
      <SignedIn>
        <DashboardContent />
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
