"use client";
import { auth } from "@clerk/nextjs/server";

import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { getUserStats } from "@/app/actions/getUserStats";


const COURSE_LIMIT = 5;
function AddCourse({hasYearly}) {
  
  const { user } = useUser();
  const router = useRouter();



  const handleCreate = async () => {
    if (!user) return;

  

    const stats = await getUserStats(
      user.primaryEmailAddress.emailAddress
    );


    // 🚫 Not premium & limit reached
    if (!hasYearly && stats.totalCourses >= COURSE_LIMIT) {
      router.push("/dashboard/upgrade");
      return;
    }

    // ✅ Allowed
    router.push("/create-course");
  };

  return (
    <div className="flex justify-between items-center">
      <div>
        <h2>
          Hello <span className="font-bold">{user?.fullName}</span>
        </h2>
        <p className="text-sm text-gray-500">
          Create AI courses and share with the world
        </p>
      </div>

      <Button onClick={handleCreate}>
        + Create AI Course
      </Button>
    </div>
  );
}

export default AddCourse;
