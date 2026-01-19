"use client";

import Image from "next/image";
import Link from "next/link";

function ExploreCourseCard({ course }) {
  return (
    <Link href={`/${course.courseId}`}>
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden cursor-pointer">
        <Image
          src={course.picture_URL || "/course-placeholder.png"}
          width={400}
          height={200}
          alt={course.name}
          className="w-full h-40 object-cover"
        />

        <div className="p-4">
          <h3 className="font-semibold line-clamp-1">
            {course.name}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            {course.category} • {course.level}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ExploreCourseCard;
