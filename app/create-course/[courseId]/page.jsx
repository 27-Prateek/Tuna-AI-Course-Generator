

 
// "use client"
// import ChapterList from "./_components/ChapterList"
// import CourseDetail from "./_components/CourseDetail"
// import CourseBasicinfo from "./_components/CourseBasicinfo"
// import { useUser } from "@clerk/nextjs"
// import { useParams } from "next/navigation"
// import React, { useEffect, useState } from "react"
// import { getCourse } from "@/app/actions/getCourse"

// function CourseLayout() {
//   const { user, isLoaded } = useUser()
//   const { courseId } = useParams()
//   const [course, setCourse] = useState([])

//   useEffect(() => {
//     if (isLoaded && user && courseId) {
//       fetchCourse()
//     }
//   }, [isLoaded, user, courseId])

//   const fetchCourse = async () => {
//     const result = await getCourse(
//       courseId,
//       user.primaryEmailAddress.emailAddress
//     )

//     console.log(result)     // ✅ ARRAY PRINTED
//     setCourse(result)
//   }

//   return (
//     <div className="mt-10 px-7 md:px-20 lg:px-44">
//       <h2 className="font-bold text-center text-2xl">
//         Course Layout
//       </h2>
//       {/* basix info */}
//       <CourseBasicinfo course={course}/>

//       {/* course details */}
//       <CourseDetail course={course}/>

//       {/* list fo lesson */}
//       <ChapterList course={course}/>

//     </div>
//   )
// }

// export default CourseLayout


"use client";

import ChapterList from "./_components/ChapterList";
import CourseDetail from "./_components/CourseDetail";
import CourseBasicinfo from "./_components/CourseBasicinfo";
import { useUser } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getCourse } from "@/app/actions/getCourse";

function CourseLayout() {
  const { user, isLoaded } = useUser();
  const { courseId } = useParams();
  const [course, setCourse] = useState([]);

  useEffect(() => {
    if (isLoaded && user && courseId) {
      fetchCourse();
    }
  }, [isLoaded, user, courseId]);

  const fetchCourse = async () => {
    const result = await getCourse(
      courseId,
      user.primaryEmailAddress.emailAddress
    );
    setCourse(result);
  };

  // ✅ THIS IS THE IMPORTANT PART
  const handleBasicInfoUpdate = ({ courseName, description }) => {
    setCourse((prev) => {
      if (!prev?.length) return prev;

      return [
        {
          ...prev[0],
          courseOutput: {
            ...prev[0].courseOutput,
            courseName,
            description,
          },
        },
      ];
    });
  };

  return (
    <div className="mt-10 px-7 md:px-20 lg:px-44">
      <h2 className="font-bold text-center text-2xl">
        Course Layout
      </h2>

      {/* basic info */}
      <CourseBasicinfo
        course={course}
        onBasicInfoUpdate={handleBasicInfoUpdate}
      />

      {/* course details */}
      <CourseDetail course={course} />

      {/* chapter list */}
      <ChapterList course={course} />
    </div>
  );
}

export default CourseLayout;
