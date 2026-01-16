"use server";

import cloudinary from "@/configs/cloudinary";
import { db } from "@/configs/db";
import { courseList } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function uploadImageToCloudinary(file, courseId) {
  try {
    if (!courseId) {
      throw new Error("courseId missing");
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        {
          folder: "course-images",
          public_id: courseId,
          overwrite: true,
          unique_filename: false,
          resource_type: "image",
        },
        (error, result) => {
          if (error) reject(error);
          resolve(result);
        }
      ).end(buffer);
    });


    await db
      .update(courseList)
      .set({
        picture_URL: uploadResult.secure_url,
      })
      .where(eq(courseList.courseId, courseId));

    return {
      success: true,
      url: uploadResult.secure_url,
      publicId: uploadResult.public_id,
    };
  } catch (error) {
    console.error("Upload error:", error);
    return {
      success: false,
      error: "Image upload failed",
    };
  }
}
