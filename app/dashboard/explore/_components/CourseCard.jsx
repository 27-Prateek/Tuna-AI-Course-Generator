import Image from "next/image";
import Link from "next/link";

function CourseCard({ course }) {
  return (
    <Link href={`/${course.courseId}`}>
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
