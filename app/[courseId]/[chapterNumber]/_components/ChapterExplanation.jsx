"use client";

import { BookOpen } from "lucide-react";

export default function ChapterExplanation({ explanation }) {
  if (!explanation) return null;

  return (
    <div className="bg-white border rounded-2xl shadow-sm p-6 mb-8">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="text-purple-600" size={22} />
        <h2 className="text-lg font-semibold text-gray-900">
          Explanation
        </h2>
      </div>

      {/* Content */}
      <div className="prose prose-gray max-w-none leading-relaxed">
        {explanation.split("\n").map((line, idx) => (
          <p key={idx} className="mb-3 text-gray-700">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
