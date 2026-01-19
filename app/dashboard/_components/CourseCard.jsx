// "use client";

// import Image from "next/image";
// import Link from "next/link";

// function CourseCard({ course }) {
//   return (
//     <Link href={`/create-course/${course.courseId}`}>
//       <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition cursor-pointer overflow-hidden">
//         {/* Image */}
//         <div className="relative w-full h-40 bg-gray-100">
//           <Image
//             src={course.picture_URL || "/course-placeholder.png"}
//             alt={course.name}
//             fill
//             className="object-cover"
//           />
//         </div>

//         {/* Content */}
//         <div className="p-4">
//           <h2 className="font-semibold text-lg line-clamp-1">
//             {course.name}
//           </h2>

//           <p className="text-sm text-gray-500 mt-1">
//             Level: {course.level}
//           </p>

//           <p className="text-sm text-gray-500 mt-1">
//             Chapters: {course.numberOfChaptersCreated}
//           </p>
//         </div>
//       </div>
//     </Link>
//   );
// }

// export default CourseCard;
import Image from "next/image";
import Link from "next/link";

function CourseCard({ course }) {
  return (
    <Link href={`/create-course/${course.courseId}`}>
      <div className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition h-full flex flex-col">
        
        {/* Image */}
        <div className="relative h-40 w-full bg-gray-100">
          <Image
            src={course.picture_URL || "/placeholder.png"}
            alt={course.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-semibold text-lg line-clamp-1">
            {course.name}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            {course.category} • {course.level}
          </p>

          <div className="mt-auto text-xs text-gray-400">
            {course.numberOfChaptersCreated} chapters
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CourseCard;
