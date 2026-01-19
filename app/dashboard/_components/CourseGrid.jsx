"use client";

import CourseCard from "./CourseCard";

function CourseGrid({ courses }) {
  if (!courses?.length) {
    return (
      <div className="text-center text-gray-500 py-20">
        You haven’t created any courses yet.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard key={course.courseId} course={course} />
      ))}
    </div>
  );
}

export default CourseGrid;
