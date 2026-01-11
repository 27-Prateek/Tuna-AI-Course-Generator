"use client";

import { useState, useEffect, useContext } from "react";
import { HiMiniSquares2X2, HiSquare3Stack3D } from "react-icons/hi2";
import { Button } from "../../components/ui/button";
import LoadingDialog from "./_components/LoadingDialog";
import SelectCategory from "./_components/SelectCategory";
import TopDescription from "./_components/TopDescription";
import SelectOption from "./_components/SelectOption";

import { UserInputContext } from "../_context/UserInputContext";

function CreateCourse() {
  const StepperOptions = [
    { id: 1, name: "Category", icon: <HiMiniSquares2X2 /> },
    { id: 2, name: "Details", icon: <HiSquare3Stack3D /> },
    { id: 3, name: "Publish", icon: <HiMiniSquares2X2 /> },
  ];

  const [activateIndex, setActivateIndex] = useState(0);
  
  const { userCourseInput } = useContext(UserInputContext);
  
  // const GenerateCourseLayout=async()=>{
  //   SetLoading(true)
  //   const BASIC_PROMPT='Generate A Course Tutorial on Following Detail With field as Course Name, Description, Along with Chapter Name, about, Duration: '
  //   const USER_INPUT_PROMPT='Category: '+userCourseInput?.category+", Topic: "+userCourseInput?.topic+", Level: "+userCourseInput?.difficulty+", Duration: "+userCourseInput?.duration+", No of Chapters:"+userCourseInput.chapters+", in JSON format"
  //   const FINAL_PROMPT=BASIC_PROMPT+USER_INPUT_PROMPT
  //   console.log(FINAL_PROMPT);
  //   const result=await GenerateCourseLayout.sendMessage
  //   console.log(result.response?.text());
  //   console.log(JSON.parse(result.response?.text()))
  //   setLoading(false);
  // }
const [loading, setLoading] = useState(false);

const GenerateCourseLayout = async () => {
  try {
    setLoading(true);

    const BASIC_PROMPT =
      "Generate a course tutorial with fields: courseName, description, chapters (array). Each chapter should include chapterName, about, duration.";

    const USER_INPUT_PROMPT =
      "Category: " +
      userCourseInput.category +
      ", Topic: " +
      userCourseInput.topic +
      ", Level: " +
      userCourseInput.difficulty +
      ", Duration: " +
      userCourseInput.duration +
      ", No of Chapters: " +
      userCourseInput.chapters;

    const FINAL_PROMPT = BASIC_PROMPT + " " + USER_INPUT_PROMPT;

    console.log("PROMPT →", FINAL_PROMPT);

    const res = await fetch("/api/generate-course", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: FINAL_PROMPT }),
    });

    const result = await res.json();

    console.log("AI RESULT →", result);

    // OPTIONAL
    // setCourseLayout(result);

  } catch (error) {
    console.error("GenerateCourseLayout error:", error);
  } finally {
    setLoading(false);
  }
};


  const checkStatus = () => {
    if (activateIndex === 0) {
      return !userCourseInput.category;
    }

    if (activateIndex === 1) {
      return !userCourseInput.topic;
    }

    if (activateIndex === 2) {
      return (
        !userCourseInput.difficulty ||
        !userCourseInput.duration ||
        !userCourseInput.includeVideo ||
        !userCourseInput.chapters

      );
    }

    return false;
  };

  useEffect(() => {
    console.log("Course Data:", userCourseInput);
  }, [userCourseInput]);

  return (
    <div className="w-full">
      <div className="flex flex-col items-center mt-10">
        <h2 className="text-4xl text-[#5cbfb5] font-medium mb-8">
          Create Course
        </h2>

        <div className="flex items-center">
          {StepperOptions.map((item, index) => (
            <div key={item.id} className="flex items-center">
              <div className="flex flex-col items-center w-[60px] md:w-[100px]">
                <div
                  className={`p-4 rounded-full text-xl
                    ${
                      activateIndex >= index
                        ? "bg-[#5cbfb5] text-white"
                        : "bg-gray-200 text-gray-600"
                    }
                  `}
                >
                  {item.icon}
                </div>

                <h2 className="hidden md:block mt-2 text-sm">
                  {item.name}
                </h2>
              </div>

              {index !== StepperOptions.length - 1 && (
                <div
                  className={`h-1 w-[50px] md:w-[100px] lg:w-[170px] mx-2 rounded-full
                    ${
                      activateIndex > index
                        ? "bg-[#5cbfb5]"
                        : "bg-gray-300"
                    }
                  `}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="px-10 md:px-20 lg:px-44 mt-10">
        {activateIndex === 0 && <SelectCategory />}
        {activateIndex === 1 && <TopDescription />}
        {activateIndex === 2 && <SelectOption />}

        <div className="flex justify-between gap-4 mt-10">
          <Button
            variant="outline"
            disabled={activateIndex === 0}
            onClick={() =>
              setActivateIndex((prev) => Math.max(prev - 1, 0))
            }
          >
            Previous
          </Button>

          {activateIndex < 2 && (
            <Button
              disabled={checkStatus()}
              onClick={() =>
                setActivateIndex((prev) =>
                  Math.min(prev + 1, StepperOptions.length - 1)
                )
              }
            >
              Next
            </Button>
          )}

          {activateIndex === 2 && (
            <Button
              disabled={checkStatus()}
              onClick={() => {
                GenerateCourseLayout()
                console.log("FINAL SUBMIT:", userCourseInput);
              }}
            >
              Generate Course Layout
            </Button>
          )}
        </div>
      </div>
      <LoadingDialog loading={loading}/>
    </div>
  );
}

export default CreateCourse;
