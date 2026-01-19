// "use client";

// import { useState, useEffect, useContext } from "react";
// import { HiMiniSquares2X2, HiSquare3Stack3D } from "react-icons/hi2";
// import { Button } from "../../components/ui/button";
// import LoadingDialog from "./_components/LoadingDialog";
// import SelectCategory from "./_components/SelectCategory";
// import TopDescription from "./_components/TopDescription";
// import SelectOption from "./_components/SelectOption";
// import { useUser } from "@clerk/nextjs";
// import { UserInputContext } from "../_context/UserInputContext";
// import { saveCourseLayout } from "@/app/actions/saveCourseLayout";
// import { useRouter } from "next/navigation";

// function CreateCourse() {
//   const StepperOptions = [
//     { id: 1, name: "Category", icon: <HiMiniSquares2X2 /> },
//     { id: 2, name: "Details", icon: <HiSquare3Stack3D /> },
//     { id: 3, name: "Publish", icon: <HiMiniSquares2X2 /> },
//   ];

//   const [activateIndex, setActivateIndex] = useState(0);
//   const [loading, setLoading] = useState(false);

//   const { user } = useUser();
//   const router = useRouter();
//   const { userCourseInput } = useContext(UserInputContext);

//   const GenerateCourseLayout = async () => {
//     if (!user) return;

//     try {
//       setLoading(true);

//       const res = await fetch("/api/generate-course", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           category: userCourseInput.category,
//           topic: userCourseInput.topic,
//           difficulty: userCourseInput.difficulty,
//           duration: userCourseInput.duration,
//           chapters: userCourseInput.chapters,
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.error || "Failed to generate course");
//       }

//       const result = await saveCourseLayout({
//         userCourseInput,
//         courseLayout: data.data,
//         userInfo: {
//           userId: user.id,
//           email: user.primaryEmailAddress?.emailAddress,
//           name: user.fullName,
//           image: user.imageUrl,
//         },
//       });

//       router.replace(`/create-course/${result.courseId}`);
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const checkStatus = () => {
//     if (activateIndex === 0) return !userCourseInput.category;
//     if (activateIndex === 1) return !userCourseInput.topic;
//     if (activateIndex === 2) {
//       return (
//         !userCourseInput.difficulty ||
//         !userCourseInput.duration ||
//         !userCourseInput.chapters
//       );
//     }
//     return false;
//   };

//   useEffect(() => {
//     console.log("Course Data:", userCourseInput);
//   }, [userCourseInput]);

//   return (
//     <div className="w-full">
//       <div className="flex flex-col items-center mt-10">
//         <h2 className="text-4xl text-[#5cbfb5] font-medium mb-8">
//           Create Course
//         </h2>

//         <div className="flex items-center">
//           {StepperOptions.map((item, index) => (
//             <div key={item.id} className="flex items-center">
//               <div className="flex flex-col items-center w-[60px] md:w-[100px]">
//                 <div
//                   className={`p-4 rounded-full text-xl ${
//                     activateIndex >= index
//                       ? "bg-[#5cbfb5] text-white"
//                       : "bg-gray-200 text-gray-600"
//                   }`}
//                 >
//                   {item.icon}
//                 </div>
//                 <h2 className="hidden md:block mt-2 text-sm">{item.name}</h2>
//               </div>

//               {index !== StepperOptions.length - 1 && (
//                 <div
//                   className={`h-1 w-[50px] md:w-[100px] lg:w-[170px] mx-2 rounded-full ${
//                     activateIndex > index ? "bg-[#5cbfb5]" : "bg-gray-300"
//                   }`}
//                 />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="px-10 md:px-20 lg:px-44 mt-10">
//         {activateIndex === 0 && <SelectCategory />}
//         {activateIndex === 1 && <TopDescription />}
//         {activateIndex === 2 && <SelectOption />}

//         <div className="flex justify-between gap-4 mt-10">
//           <Button
//             variant="outline"
//             disabled={activateIndex === 0}
//             onClick={() => setActivateIndex((p) => Math.max(p - 1, 0))}
//           >
//             Previous
//           </Button>

//           {activateIndex < 2 && (
//             <Button
//               disabled={checkStatus()}
//               onClick={() =>
//                 setActivateIndex((p) =>
//                   Math.min(p + 1, StepperOptions.length - 1)
//                 )
//               }
//             >
//               Next
//             </Button>
//           )}

//           {activateIndex === 2 && (
//             <Button disabled={checkStatus()} onClick={GenerateCourseLayout}>
//               Generate Course Layout
//             </Button>
//           )}
//         </div>
//       </div>

//       <LoadingDialog loading={loading} />
//     </div>
//   );
// }

// export default CreateCourse;

"use client";

import { useState, useEffect, useContext } from "react";
import { HiMiniSquares2X2, HiSquare3Stack3D } from "react-icons/hi2";
import { Button } from "../../components/ui/button";
import LoadingDialog from "./_components/LoadingDialog";
import SelectCategory from "./_components/SelectCategory";
import TopDescription from "./_components/TopDescription";
import SelectOption from "./_components/SelectOption";
import { useUser } from "@clerk/nextjs";
import { UserInputContext } from "../_context/UserInputContext";
import { saveCourseLayout } from "@/app/actions/saveCourseLayout";
import { useRouter } from "next/navigation";

function CreateCourse() {
  const StepperOptions = [
    { id: 1, name: "Category", icon: <HiMiniSquares2X2 /> },
    { id: 2, name: "Details", icon: <HiSquare3Stack3D /> },
    { id: 3, name: "Publish", icon: <HiMiniSquares2X2 /> },
  ];

  const [activateIndex, setActivateIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const { user } = useUser();
  const router = useRouter();
  const { userCourseInput } = useContext(UserInputContext);

  /* ----------------------------------
     Generate Course Layout
  ---------------------------------- */
  const GenerateCourseLayout = async () => {
    if (!user) return;

    if (!userCourseInput.chapters || userCourseInput.chapters <= 0) {
      alert("Please enter a valid number of chapters.");
      return;
    }

    try {
      setLoading(true);

      // 1️⃣ Generate layout via API
      const res = await fetch("/api/generate-course", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: userCourseInput.category,
          topic: userCourseInput.topic,
          difficulty: userCourseInput.difficulty,
          duration: userCourseInput.duration,
          chapters: userCourseInput.chapters,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to generate course");
      }

      // 2️⃣ Save layout to DB
      const result = await saveCourseLayout({
        userCourseInput,
        courseLayout: data.data,
        userInfo: {
          userId: user.id,
          email: user.primaryEmailAddress?.emailAddress,
          name: user.fullName,
          image: user.imageUrl,
        },
      });

      // 3️⃣ Redirect to course layout page
      router.replace(`/create-course/${result.courseId}`);
    } catch (err) {
      console.error(err);
      alert(
        "Sorry 😔\n\nWe couldn’t generate your course right now. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  /* ----------------------------------
     Step Validation
  ---------------------------------- */
  const checkStatus = () => {
    if (activateIndex === 0) return !userCourseInput.category;
    if (activateIndex === 1) return !userCourseInput.topic;
    if (activateIndex === 2) {
      return (
        !userCourseInput.difficulty ||
        !userCourseInput.duration ||
        !userCourseInput.chapters
      );
    }
    return false;
  };

  useEffect(() => {
    console.log("Course Data:", userCourseInput);
  }, [userCourseInput]);

  /* ----------------------------------
     UI
  ---------------------------------- */
  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col items-center mt-10">
        <h2 className="text-4xl text-[#5cbfb5] font-medium mb-8">
          Create Course
        </h2>

        {/* Stepper */}
        <div className="flex items-center">
          {StepperOptions.map((item, index) => (
            <div key={item.id} className="flex items-center">
              <div className="flex flex-col items-center w-[60px] md:w-[100px]">
                <div
                  className={`p-4 rounded-full text-xl ${
                    activateIndex >= index
                      ? "bg-[#5cbfb5] text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {item.icon}
                </div>
                <h2 className="hidden md:block mt-2 text-sm">
                  {item.name}
                </h2>
              </div>

              {index !== StepperOptions.length - 1 && (
                <div
                  className={`h-1 w-[50px] md:w-[100px] lg:w-[170px] mx-2 rounded-full ${
                    activateIndex > index
                      ? "bg-[#5cbfb5]"
                      : "bg-gray-300"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-10 md:px-20 lg:px-44 mt-10">
        {activateIndex === 0 && <SelectCategory />}
        {activateIndex === 1 && <TopDescription />}
        {activateIndex === 2 && <SelectOption />}

        {/* Navigation Buttons */}
        <div className="flex justify-between gap-4 mt-10">
          <Button
            variant="outline"
            disabled={activateIndex === 0 || loading}
            onClick={() =>
              setActivateIndex((p) => Math.max(p - 1, 0))
            }
          >
            Previous
          </Button>

          {activateIndex < 2 && (
            <Button
              disabled={checkStatus() || loading}
              onClick={() =>
                setActivateIndex((p) =>
                  Math.min(p + 1, StepperOptions.length - 1)
                )
              }
            >
              Next
            </Button>
          )}

          {activateIndex === 2 && (
            <Button
              disabled={checkStatus() || loading}
              onClick={GenerateCourseLayout}
            >
              {loading ? "Generating..." : "Generate Course Layout"}
            </Button>
          )}
        </div>
      </div>

      {/* Loading Dialog */}
      <LoadingDialog loading={loading} />
    </div>
  );
}

export default CreateCourse;
