// // import React from 'react'

// // function ChapterList({course}) {
// //     const data=course[0]
// //   return (

// //     <div className='mt-3'>
// //         <h2>
// //             Chatpers
// //         </h2>
// //         <div className='mt-2'>
// //             {data?.courseOutput?.chapters.map((chapters,index)=>(
// //                 <div className=''>
// //                     <h2 className='bg-[#5cbfb5] h-1 w-10 text-white rounded-full'>
// //                         {index+1}
// //                     </h2>
// //                 </div>
// //             ))}
// //         </div> 
// //     </div>
// //   )
// // }

// // export default ChapterList
// import React from "react";

// function ChapterList({ course }) {
//   const data = course?.[0];

//   return (
//     <div className="mt-3">
//       <h2 className="text-lg font-semibold">
//         Chapters
//       </h2>

//       <div className="mt-4 space-y-3">
//         {data?.courseOutput?.chapters?.map((chapter, index) => (
//           <div
//             key={index}
//             className="flex items-center gap-3 p-3 border rounded-lg"
//           >
//             <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#5cbfb5] text-white font-semibold">
//               {index + 1}
//             </div>

//             <h3 className="text-sm font-medium">
//               {chapter.chapterName || `Chapter ${index + 1}`}
//             </h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ChapterList;
import React from "react";
import { HiOutlineClock } from "react-icons/hi";
import { HiOutlineCheckCircle } from "react-icons/hi";


function ChapterList({ course }) {
  const data = course?.[0];
  const chapters = data?.courseOutput?.chapters || [];

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">
        Chapters
      </h2>

      <div className="space-y-4 my-5">
        {chapters.map((chapter, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 border rounded-xl bg-white shadow-sm"
          >
            {/* Number circle */}
            <div className="flex items-center justify-center h-9 w-9 rounded-full bg-purple-500 text-white font-semibold text-sm">
              {index + 1}
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="font-semibold text-sm">
                {chapter.chapterName || `Chapter ${index + 1}`}
              </h3>

              <p className="text-gray-600 text-sm mt-1">
                {chapter.explanation}
              </p>

              {/* Duration */}
              {chapter.duration && (
                <div className="flex items-center gap-1 text-xs text-purple-500 mt-2">
                  <span><HiOutlineClock /></span>
                  <span>{chapter.duration}</span>
                </div>
              )}
            </div>
            <HiOutlineCheckCircle className=" text-3xl text-gray-300" />

          </div>
        ))}
      </div>
    </div>
  );
}

export default ChapterList;

