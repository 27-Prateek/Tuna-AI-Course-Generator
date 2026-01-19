"use client";

import React, { useState, useEffect } from "react";
import { HiOutlineClock, HiOutlineCheckCircle } from "react-icons/hi";
import Editchapters from "./Editchapters";

function ChapterList({ course }) {
  const data = course?.[0];
  const courseId = data?.courseId;

  const [chapters, setChapters] = useState(
    data?.courseOutput?.chapters || []
  );

  // keep state in sync if course changes
  useEffect(() => {
    setChapters(data?.courseOutput?.chapters || []);
  }, [course]);

  const handleChapterUpdate = ({ index, chapterName, explanation }) => {
    setChapters((prev) => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        chapterName,
        explanation,
      };
      return updated;
    });
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Chapters</h2>

      <div className="space-y-4 my-5">
        {chapters.map((chapter, index) => (
          <div
            key={index}
            className="group flex items-start gap-4 p-4 border rounded-xl bg-white shadow-sm"
          >
            {/* Number */}
            <div className="flex items-center justify-center h-9 w-9 rounded-full bg-purple-500 text-white font-semibold text-sm">
              {index + 1}
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-sm">
                  {chapter.chapterName || `Chapter ${index + 1}`}
                </h3>
{/* 
                <Editchapters
                  chapter={chapter}
                  index={index}
                  courseId={courseId}
                  onUpdated={handleChapterUpdate}
                /> */}
              </div>

              <p className="text-gray-600 text-sm mt-1">
                {chapter.explanation}
              </p>

              {chapter.duration && (
                <div className="flex items-center gap-1 text-xs text-purple-500 mt-2">
                  <HiOutlineClock />
                  <span>{chapter.duration}</span>
                </div>
              )}
            </div>

            {/* <HiOutlineCheckCircle className="text-3xl text-gray-300" /> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChapterList;
  