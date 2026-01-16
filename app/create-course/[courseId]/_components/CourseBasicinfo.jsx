
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, {
  useEffect,
  useRef,
  useState,
  startTransition,
} from "react";
import { HiOutlinePuzzle } from "react-icons/hi";
import EditCourseBasicInfo from "./EditCourseBasicInfo";

import { uploadImageToCloudinary } from "../../../actions/cloudinary_image_upload_route.js";

function CourseBasicinfo({ course }) {
  const data = course?.[0];
  const FALLBACK_IMAGE =
  "https://res.cloudinary.com/dnqi60hyu/image/upload/v1768495108/guide-placeholder_qcisj8.png";

const [imageUrl, setImageUrl] = useState(FALLBACK_IMAGE);



  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);

  const fileInputRef = useRef(null);


useEffect(() => {
  setTitle(data?.courseOutput?.courseName || "");
  setDescription(data?.courseOutput?.description || "");
  setImageUrl(data?.picture_URL || FALLBACK_IMAGE);
}, [course]);

  const handleUpdate = ({ courseName, description }) => {
    setTitle(courseName);
    setDescription(description);
  };

  const onFileSelected = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    startTransition(async () => {
      try {
        setUploading(true);

        const res = await uploadImageToCloudinary(file,data?.courseId);

        if (res.success) {
          setImageUrl(res.url);
        }
      } catch (err) {
        console.error("Image upload failed", err);
      } finally {
        setUploading(false);
      }
    });
  };

  return (
    <div className="p-8 border rounded-2xl shadow-md mt-6 bg-white hover:shadow-lg transition">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* LEFT */}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-gray-900">
              {title || "Untitled Course"}
            </h2>

            <EditCourseBasicInfo
              course={course}
              onUpdated={handleUpdate}
            />
          </div>

          <p className="text-gray-600 mt-4 leading-relaxed">
            {description || "No course description provided yet."}
          </p>

          <div className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full bg-[#5cbfb5]/10 text-[#5cbfb5] text-sm font-medium">
            <HiOutlinePuzzle className="text-lg" />
            {data?.courseOutput?.category}
          </div>

          <Button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg py-6 rounded-xl">
            Start Course
          </Button>
        </div>

        {/* RIGHT */}
        <div>
          <div
            onClick={() => !uploading && fileInputRef.current.click()}
            className="relative cursor-pointer group"
          >
            <Image
              src={imageUrl}
              width={400}
              height={300}
              className="w-full h-[260px] rounded-2xl object-cover"
              alt="Course thumbnail"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition rounded-2xl flex items-center justify-center">
              <span className="text-white font-medium">
                {uploading ? "Uploading..." : "Click to change image"}
              </span>
            </div>

            {uploading && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-2xl">
                <span className="text-white font-medium">
                  Uploading...
                </span>
              </div>
            )}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={onFileSelected}
            className="hidden"
          />
        </div>

      </div>
    </div>
  );
}

export default CourseBasicinfo;
