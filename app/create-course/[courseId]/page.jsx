
"use client";

import { generateChapters } from "@/app/actions/generateChapters";
import { useUser } from "@clerk/nextjs";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getCourse } from "@/app/actions/getCourse";
import CourseBasicinfo from "./_components/CourseBasicinfo";
import CourseDetail from "./_components/CourseDetail";
import ChapterList from "./_components/ChapterList";
import { Button } from "@/components/ui/button";

function CourseLayout() {
  const { user, isLoaded } = useUser();
  const { courseId } = useParams();
  const router = useRouter();

  const resolvedCourseId = Array.isArray(courseId)
    ? courseId[0]
    : courseId;

  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoaded && user && resolvedCourseId) {
      fetchCourse();
    }
  }, [isLoaded, user, resolvedCourseId]);

  const fetchCourse = async () => {
    const result = await getCourse(
      resolvedCourseId,
      user.primaryEmailAddress.emailAddress
    );
    setCourse(result);
    // console.log(result);
  };

  // ✅ FIXED LOGIC
  const GenerateChapterContent = async () => {
    if (!course?.length || loading) return;

    const createdCount = course[0].numberOfChaptersCreated;

    setLoading(true);
    try {
      
      if (createdCount === 0) {
        await generateChapters(resolvedCourseId);

        const updated = await getCourse(
          resolvedCourseId,
          user.primaryEmailAddress.emailAddress
        );
        setCourse(updated);

        router.push(`/create-course/${resolvedCourseId}/1`);
        return;
      }

      // 🔹 CASE 2: Chapters already exist → just open Chapter 1
      router.push(`/create-course/${resolvedCourseId}/1`);
    } catch (err) {
      console.error("Generation failed", err);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Button label
  const nextChapterNumber =
    (course?.[0]?.numberOfChaptersCreated ?? 0) + 1;

  return (
    <div className="mt-10 px-7 md:px-20 lg:px-44">
      <h2 className="font-bold text-center text-2xl">
        Course Layout
      </h2>

      <CourseBasicinfo course={course} />
      <CourseDetail course={course} />
      <ChapterList course={course} />

      <Button
        disabled={loading}
        onClick={GenerateChapterContent}
        className="my-10 bg-blue-600 hover:bg-blue-700 text-white"
      >
        {loading
          ? `Opening Chapter ${nextChapterNumber}...`
          : `Open Chapter 1`}
      </Button>
    </div>
  );
}

export default CourseLayout;
