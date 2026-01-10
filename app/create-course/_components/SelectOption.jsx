"use client";

import { useContext } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { UserInputContext } from "@/app/_context/UserInputContext";

function SelectOption() {
  const { userCourseInput, setUserCourseInput } =
    useContext(UserInputContext);

  const handleInputChange = (fieldName, value) => {
    setUserCourseInput((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  return (
    <div className="px-6 md:px-20 lg:px-44">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Difficulty Level */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">
            Difficulty level
          </label>

          <Select
            value={userCourseInput.difficulty || ""}
            onValueChange={(value) =>
              handleInputChange("difficulty", value)
            }
          >
            <SelectTrigger className="w-full max-w-[280px]">
              <SelectValue placeholder="Select difficulty" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Hard">Hard</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Course Duration */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">
            Course Duration
          </label>

          <Select
            value={userCourseInput.duration || ""}
            onValueChange={(value) =>
              handleInputChange("duration", value)
            }
          >
            <SelectTrigger className="w-full max-w-[280px]">
              <SelectValue placeholder="Select duration" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="2 Hours">2 Hours</SelectItem>
              <SelectItem value="3 Hours">3 Hours</SelectItem>
              <SelectItem value="More than 3 Hours">
                More than 3 Hours
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Add Video */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">
            Add Video
          </label>

          <Select
            value={userCourseInput.includeVideo || ""}
            onValueChange={(value) =>
              handleInputChange("includeVideo", value)
            }
          >
            <SelectTrigger className="w-full max-w-[280px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="Yes">Yes</SelectItem>
              <SelectItem value="No">No</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* No. of Chapters */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium">
            No. of chapters
          </label>

          <Input
            type="number"
            className="w-full max-w-[280px]"
            placeholder="e.g. 10"
            value={userCourseInput.chapters || ""}
            onChange={(e) =>
              handleInputChange("chapters", e.target.value)
            }
          />
        </div>

      </div>
    </div>
  );
}

export default SelectOption;
