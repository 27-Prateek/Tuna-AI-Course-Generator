"use client";

import { useContext } from "react";
import CategoryList from "@/app/_shared/CategoryList";
import Image from "next/image";
import { UserInputContext } from "@/app/_context/UserInputContext";

function SelectCategory() {
  const { userCourseInput, setUserCourseInput } =
    useContext(UserInputContext);

  const handleCategoryChange = (category) => {
    setUserCourseInput((prev) => ({
      ...prev,
      category: category,
    }));
  };

  return (
    <div className="px-6 md:px-20 lg:px-44">
      <h2 className="text-xl font-semibold mb-6">
        Select the Course Category
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
        {CategoryList.map((item, index) => (
          <div
            key={index}
            onClick={() => handleCategoryChange(item.name)}
            className={`flex flex-col items-center gap-3 p-5 border rounded-xl cursor-pointer transition
              ${
                userCourseInput.category === item.name
                  ? "border-[#5cbfb5] bg-blue-50"
                  : "hover:border-[#5cbfb5] hover:bg-blue-50"
              }
            `}
          >
            <Image
              src={item.icon}
              width={50}
              height={50}
              alt={item.name || "category icon"}
            />

            <h2 className="text-sm font-medium text-center">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectCategory;
