"use client";

import { useEffect, useState } from "react";
import ExploreHeader from "./_components/ExploreHeader";
import ExploreFilters from "./_components/ExploreFilters";
import ExploreGrid from "./_components/ExploreGrid";
import ExploreSkeleton from "./_components/ExploreSkeleton";
import { getAllPublicCourses } from "@/app/actions/getAllPublicCourses";

function ExplorePage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    setLoading(true);
    const result = await getAllPublicCourses();
    setCourses(result || []);
    setLoading(false);
  };

  const filteredCourses =
    category === "All"
      ? courses
      : courses.filter((c) => c.category === category);

  return (
    <div className="px-6 md:px-20 lg:px-44 py-10">
      <ExploreHeader />

      <ExploreFilters
        selected={category}
        onSelect={setCategory}
      />

      {loading ? (
        <ExploreSkeleton />
      ) : (
        <ExploreGrid courses={filteredCourses} />
      )}
    </div>
  );
}

export default ExplorePage;
