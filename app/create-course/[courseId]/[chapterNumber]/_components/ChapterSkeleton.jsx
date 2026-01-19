"use client";

export default function ChapterSkeleton() {
  return (
    <div className="px-6 md:px-20 lg:px-44 py-10 animate-pulse">
      {/* Header */}
      <div className="bg-gray-200 rounded-2xl h-24 mb-8" />

      {/* Video */}
      <div className="bg-gray-200 rounded-2xl aspect-video mb-8" />

      {/* Explanation */}
      <div className="space-y-4 mb-8">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
      </div>

      {/* Code */}
      <div className="bg-gray-900 rounded-2xl h-40 mb-10" />

      {/* Navigation */}
      <div className="flex justify-between">
        <div className="h-10 w-32 bg-gray-200 rounded" />
        <div className="h-10 w-40 bg-gray-200 rounded" />
      </div>
    </div>
  );
}
