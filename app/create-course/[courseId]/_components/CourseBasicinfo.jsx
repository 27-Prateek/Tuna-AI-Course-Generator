// //     // import { Button } from '@/components/ui/button';
// //     // import Image from 'next/image'
// //     // import React from 'react'
// //     // import { HiOutlinePuzzle } from "react-icons/hi";
// //     // function CourseBasicinfo({ course }) {
// //     // const data = course?.[0]

// //     // return (
// //     //     <div className="p-10 border rounded-xl shadow-sm mt-5" >
// //     //     <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
// //     //         <div>
// //     //         <h2 className="text-2xl font-bold">
// //     //         {data?.courseOutput?.courseName}
// //     //         </h2>

// //     //         <p className="text-gray-400 mt-3">
// //     //         {data?.courseOutput?.description}
// //     //         </p>
// //     //         <h2 className='font-medium mt-2 flex gap-2 items-center text-[#5cbfb5]'><HiOutlinePuzzle />{data?.courseOutput?.category}</h2>
// //     //     <Button className="w-full bg-blue-400 hover:bg-blue-700 text-white mt-3">
// //     // Start
// //     // </Button>

// //     // </div>
// //     // <div>
// //     //     <Image src={'/guide-placeholder.png'} width={300} height={300} className='w-full rounded-xl h-[250px] object-cover' alt={"placeholder"}/>
// //     // </div>
// //     //         {/* <p>
// //     //         Duration: {data?.courseOutput?.duration}
// //     //         </p> */} 
// //     //     </div>
// //     //     </div>
// //     // )
// //     // }

// //     // export default CourseBasicinfo

// // import { Button } from '@/components/ui/button'
// // import Image from 'next/image'
// // import React from 'react'
// // import { HiOutlinePuzzle } from "react-icons/hi"
// // import EditCourseBasicInfo from './EditCourseBasicInfo'

// // function CourseBasicinfo({ course }) {
// //   const data = course?.[0]

// //   return (
// //     <div className="p-8 border rounded-2xl shadow-md mt-6 bg-white hover:shadow-lg transition">
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

// //         {/* LEFT */}
// //         <div>
// //           <div className="flex items-center justify-between">
// //             <h2 className="text-3xl font-bold text-gray-900">
// //             {data?.courseOutput?.courseName}
// //             </h2>

// //             <EditCourseBasicInfo className="text-3xl" course={course} />
// //             </div>


// //           <p className="text-gray-500 mt-4 leading-relaxed">
// //             {data?.courseOutput?.description}
// //           </p>

// //           {/* Category pill */}
// //           <div className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full bg-[#5cbfb5]/10 text-[#5cbfb5] text-sm font-medium">
// //             <HiOutlinePuzzle className="text-lg" />
// //             {data?.courseOutput?.category}
// //           </div>

// //           {/* CTA */}
// //           <Button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-blue-700 hover:opacity-90 text-white text-lg py-6 rounded-xl">
// //             Start Course
// //           </Button>
// //         </div>

// //         {/* RIGHT */}
// //         <div>
// //           <Image
// //             src="/guide-placeholder.png"
// //             width={400}
// //             height={300}
// //             className="w-full h-[260px] rounded-2xl object-cover"
// //             alt="Course thumbnail"
// //           />
// //         </div>

// //       </div>
// //     </div>
// //   )
// // }

// // export default CourseBasicinfo

// "use client";

// import { Button } from '@/components/ui/button'
// import Image from 'next/image'
// import React, { useState } from 'react'
// import { HiOutlinePuzzle } from "react-icons/hi"
// import EditCourseBasicInfo from './EditCourseBasicInfo'

// function CourseBasicinfo({ course }) {
//   const data = course?.[0];

//   const [title, setTitle] = useState(data?.courseOutput?.courseName);
//   const [description, setDescription] = useState(data?.courseOutput?.description);

//   const handleUpdate = ({ courseName, description }) => {
//     setTitle(courseName);
//     setDescription(description);
//   };

//   return (
//     <div className="p-8 border rounded-2xl shadow-md mt-6 bg-white hover:shadow-lg transition">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

//         {/* LEFT */}
//         <div>
//           <div className="flex items-center justify-between">
//             <h2 className="text-3xl font-bold text-gray-900">
//               {title}
//             </h2>

//             <EditCourseBasicInfo
//               course={course}
//               onUpdated={handleUpdate}
//             />
//           </div>

//           <p className="text-gray-500 mt-4 leading-relaxed">
//             {description}
//           </p>

//           <div className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full bg-[#5cbfb5]/10 text-[#5cbfb5] text-sm font-medium">
//             <HiOutlinePuzzle className="text-lg" />
//             {data?.courseOutput?.category}
//           </div>

//           <Button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-blue-700 hover:opacity-90 text-white text-lg py-6 rounded-xl">
//             Start Course
//           </Button>
//         </div>

//         {/* RIGHT */}
//         <div>
//           <Image
//             src="/guide-placeholder.png"
//             width={400}
//             height={300}
//             className="w-full h-[260px] rounded-2xl object-cover"
//             alt="Course thumbnail"
//           />
//         </div>

//       </div>
//     </div>
//   )
// }

// export default CourseBasicinfo
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HiOutlinePuzzle } from "react-icons/hi";
import EditCourseBasicInfo from "./EditCourseBasicInfo";

function CourseBasicinfo({ course }) {
  const data = course?.[0];

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setTitle(data?.courseOutput?.courseName || "");
    setDescription(data?.courseOutput?.description || "");
  }, [course]);

  const handleUpdate = ({ courseName, description }) => {
    setTitle(courseName);
    setDescription(description);
  };

  return (
    <div className="p-8 border rounded-2xl shadow-md mt-6 bg-white hover:shadow-lg transition">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-gray-900">
              {title}
            </h2>

            <EditCourseBasicInfo
              course={course}
              onUpdated={handleUpdate}
            />
          </div>

          <p className="text-gray-500 mt-4 leading-relaxed">
            {description}
          </p>

          <div className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full bg-[#5cbfb5]/10 text-[#5cbfb5] text-sm font-medium">
            <HiOutlinePuzzle className="text-lg" />
            {data?.courseOutput?.category}
          </div>

          <Button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-blue-700 hover:opacity-90 text-white text-lg py-6 rounded-xl">
            Start Course
          </Button>
        </div>

        <div>
          <Image
            src="/guide-placeholder.png"
            width={400}
            height={300}
            className="w-full h-[260px] rounded-2xl object-cover"
            alt="Course thumbnail"
          />
        </div>

      </div>
    </div>
  );
}

export default CourseBasicinfo;
