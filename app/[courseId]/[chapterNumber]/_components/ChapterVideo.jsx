"use client";

import { PlayCircle } from "lucide-react";

export default function ChapterVideo({ youtubeUrl }) {
  if (!youtubeUrl) return null;

  let videoId = "";

  try {
    const url = new URL(youtubeUrl);
    videoId = url.searchParams.get("v");
  } catch {
    return null;
  }

  if (!videoId) return null;

  return (
    <div className="bg-white border rounded-2xl shadow-sm p-6 mb-8">
      <div className="flex items-center gap-2 mb-4 text-gray-800">
        <PlayCircle className="text-purple-600" size={22} />
        <h2 className="text-lg font-semibold">
          Watch Video
        </h2>
      </div>

      <div className="relative w-full overflow-hidden rounded-xl aspect-video bg-gray-100">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Chapter Video"
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
