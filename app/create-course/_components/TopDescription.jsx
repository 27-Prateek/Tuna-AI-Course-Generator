"use client";

import { useContext } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UserInputContext } from "@/app/_context/UserInputContext";

function TopDescription() {
  const { userCourseInput, setUserCourseInput } =
    useContext(UserInputContext);

  const handleInputChange = (fieldName, value) => {
    setUserCourseInput((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  return (
    <div className="mx-6 md:mx-20 lg:mx-44">
      {/* Topic */}
      <div className="mt-5 flex flex-col gap-2">
        <label className="text-sm font-medium">
          Write a topic for which you want to generate the course
          <span className="text-gray-500">
            {" "} (e.g., Python Course, Yoga, etc.)
          </span>
        </label>

        <Input
          placeholder="Topic"
          value={userCourseInput.topic || ""}
          onChange={(e) =>
            handleInputChange("topic", e.target.value)
          }
        />
      </div>

      {/* Description */}
      <div className="mt-5 flex flex-col gap-2">
        <label className="text-sm font-medium">
          Tell us more about your course (Optional)
        </label>

        <Textarea
          placeholder="About your course"
          className="h-24 text-base"
          value={userCourseInput.description || ""}
          onChange={(e) =>
            handleInputChange("description", e.target.value)
          }
        />
      </div>
    </div>
  );
}

export default TopDescription;
