"use client";

import { CheckCircle } from "lucide-react";

export default function ChapterHeader({ chapter }) {
  return (
    <div className="bg-white border rounded-2xl shadow-sm p-6 mb-8">
      <div className="flex items-start justify-between">
        {/* Left Section */}
        <div className="flex items-start gap-4">
          {/* Chapter Number Badge */}
          <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-lg font-semibold shrink-0">
            {chapter.chapterNumber}
          </div>

          {/* Title & Duration */}
          <div>
            <h1 className="text-2xl font-semibold text-gray-900 leading-tight">
              {chapter.chapterName}
            </h1>

            <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
              <span>{chapter.duration}</span>
              <span className="w-1 h-1 rounded-full bg-gray-400" />
              <span>Chapter {chapter.chapterNumber}</span>
            </div>
          </div>
        </div>

        {/* Right Section (Completed Badge – future-ready) */}
        {chapter.completed && (
          <div className="flex items-center gap-1 text-green-600">
            <CheckCircle size={18} />
            <span className="text-sm font-medium">
              Completed
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
