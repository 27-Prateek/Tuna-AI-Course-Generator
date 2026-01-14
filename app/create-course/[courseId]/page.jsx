// "use client"

// import { db } from '@/configs/db'
// import { courseList } from '@/db/schema'
// import { useUser } from '@clerk/nextjs'
// import { and, eq } from 'drizzle-orm'
// import React, { useEffect } from 'react'

// function CourseLayout(params) {
//   const {user}=useUser();
//   const [course,setCourse]=useState([]);

//   useEffect(() => {
//     params&&GetCourse();
//   }, [params])

//   const GetCourse = async () => {
//     const result = await db
//       .select()
//       .from(courseList)
//       .where(
//         and(
//           eq(and (eq(courseList.courseId, params?.courseId),
//           eq(courseList.createdBy,user?.primaryEmailAddress?.emailAddress)))
//         )
//       )
//       setCourse(result[0]);
//       console.log(result);
//   }

//   return (
//     <div className='mt-10 px-7 md:px-20 lg:px-44'>
//       <h2 className='font-bold text-center text-2xl'>Course Layout</h2>
//     </div>
//   )
// }

 
"use client"
import ChapterList from "./_components/ChapterList"
import CourseDetail from "./_components/CourseDetail"
import CourseBasicinfo from "./_components/CourseBasicinfo"
import { useUser } from "@clerk/nextjs"
import { useParams } from "next/navigation"
import React, { useEffect, useState } from "react"
import { getCourse } from "@/app/actions/getCourse"

function CourseLayout() {
  const { user, isLoaded } = useUser()
  const { courseId } = useParams()
  const [course, setCourse] = useState([])

  useEffect(() => {
    if (isLoaded && user && courseId) {
      fetchCourse()
    }
  }, [isLoaded, user, courseId])

  const fetchCourse = async () => {
    const result = await getCourse(
      courseId,
      user.primaryEmailAddress.emailAddress
    )

    console.log(result)     // ✅ ARRAY PRINTED
    setCourse(result)
  }

  return (
    <div className="mt-10 px-7 md:px-20 lg:px-44">
      <h2 className="font-bold text-center text-2xl">
        Course Layout
      </h2>
      {/* basix info */}
      <CourseBasicinfo course={course}/>

      {/* course details */}
      <CourseDetail course={course}/>

      {/* list fo lesson */}
      <ChapterList course={course}/>
      
    </div>
  )
}

export default CourseLayout






// export default CourseLayout
// // // "use client"

// // // import { db } from '@/configs/db'
// // // import { courseList } from '@/db/schema'
// // // import { useUser } from '@clerk/nextjs'
// // // import { and, eq } from 'drizzle-orm'
// // // import React, { useEffect } from 'react'

// // // function CourseLayout({ params }) {
// // //   const { user, isLoaded } = useUser()

// // //   useEffect(() => {
// // //     if (isLoaded && user && params?.courseId) {
// // //       GetCourse()
// // //     }
// // //   }, [isLoaded, user, params])

// // //   const GetCourse = async () => {
// // //     const result = await db
// // //       .select()
// // //       .from(courseList)
// // //       .where(
// // //         and(
// // //           eq(courseList.courseId, params.courseId),
// // //           eq(
// // //             courseList.createdBy,
// // //             user.primaryEmailAddress.emailAddress
// // //           )
// // //         )
// // //       )

// // //     console.log(result)
// // //   }

// // //   return (
// // //     <div>CourseLayout</div>
// // //   )
// // // }

// // // export default CourseLayout
// // "use client"

// // import { useUser } from "@clerk/nextjs"
// // import React, { useEffect, useState } from "react"
// // import { getCourse } from "@/app/actions/getCourse"

// // function CoursePage({ params }) {
// //   const { user, isLoaded } = useUser()
// //   const [course, setCourse] = useState(null)

// //   useEffect(() => {
// //     if (isLoaded && user && params?.courseId) {
// //       fetchCourse()
// //     }
// //   }, [isLoaded, user, params])

// //   const fetchCourse = async () => {
// //     const result = await getCourse(
// //       params.courseId,
// //       user.primaryEmailAddress.emailAddress
// //     )
// //     setCourse(result)
// //   }

// //   return (
// //     <div>
// //       <h1>Course Page</h1>
// //       <pre>{JSON.stringify(course, null, 2)}</pre>
// //     </div>
// //   )
// // }

// // export default CoursePage
// "use client"

// import { useUser } from "@clerk/nextjs"
// import { useParams } from "next/navigation"
// import React, { useEffect, useState } from "react"
// import { getCourse } from "@/app/actions/getCourse"

// function CoursePage() {
//   const { user, isLoaded } = useUser()
//   const params = useParams()
//   const courseId = params.courseId

//   const [course, setCourse] = useState(null)

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
//     setCourse(result)
//   }
//   console.log(JSON.stringify(course, null, 2))
//   return (
//     <div>
//       <h1>Course Page</h1>
//       <pre>{JSON.stringify(course, null, 2)}</pre>
//     </div>
//   )
// }

// export default CoursePage
// "use client"

// import { useUser } from "@clerk/nextjs"
// import { useParams } from "next/navigation"
// import React, { useEffect, useState } from "react"
// import { getCourse } from "@/app/actions/getCourse"

// function CoursePage() {
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

//     console.log(result)   // ✅ ARRAY PRINTED HERE
//     setCourse(result)
//   }

//   return <div>Course Page</div>
// }

// export default CoursePage
