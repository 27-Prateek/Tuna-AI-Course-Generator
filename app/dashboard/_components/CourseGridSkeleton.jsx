"use client";

import CourseCardSkeleton from "./CourseCardSkeleton";

function CourseGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <CourseCardSkeleton key={index} />
      ))}
    </div>
  );
}

export default CourseGridSkeleton;
