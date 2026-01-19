// "use client";

// import ExploreCourseCard from "./ExploreCourseCard";

// function ExploreGrid({ courses }) {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {courses.map((course) => (
//         <ExploreCourseCard
//           key={course.courseId}
//           course={course}
//         />
//       ))}
//     </div>
//   );
// }

// export default ExploreGrid;
import CourseCard from "./CourseCard";

function ExploreGrid({ courses }) {
  if (!courses.length) {
    return (
      <div className="text-center text-gray-500 mt-10">
        No courses found in this category.
      </div>
    );
  }

  return (
    <div className="mt-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.courseId} course={course} />
        ))}
      </div>
    </div>
  );
}

export default ExploreGrid;
