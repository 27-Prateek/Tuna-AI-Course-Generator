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

//   // const GenerateCourseLayout = async () => {
//   //   if (!user) return;

//   //   try {
//   //     setLoading(true);

//   //     const res = await fetch("/api/generate-course", {
//   //       method: "POST",
//   //       headers: { "Content-Type": "application/json" },
//   //       body: JSON.stringify({
//   //         category: userCourseInput.category,
//   //         topic: userCourseInput.topic,
//   //         difficulty: userCourseInput.difficulty,
//   //         duration: userCourseInput.duration,
//   //         chapters: userCourseInput.chapters,
//   //       }),
//   //     });
      

//   //     const data = await res.json();

//   //     if (!res.ok) {
//   //       throw new Error(data.error || "Failed to generate course");
//   //     }

//   //     const result = await saveCourseLayout({
//   //       userCourseInput,
//   //       courseLayout: data.data,
//   //       userInfo: {
//   //         userId: user.id,
//   //         email: user.primaryEmailAddress?.emailAddress,
//   //         name: user.fullName,
//   //         image: user.imageUrl,
//   //       },
//   //     });

//   //     router.replace(`/create-course/${result.courseId}`);
//   //   } catch (err) {
//   //     console.error(err);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   const GenerateCourseLayout = async () => {
//   if (!user) return;

//   // ✅ VALIDATE FIRST (before API call)
//   if (
//     !userCourseInput?.category ||
//     !userCourseInput?.topic ||
//     !userCourseInput?.difficulty ||
//     !userCourseInput?.duration ||
//     !userCourseInput?.chapters
//   ) {
//     console.error("Invalid course input:", userCourseInput);
//     return;
//   }

//   try {
//     setLoading(true);

//     const res = await fetch("/api/generate-course", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         category: userCourseInput.category,
//         topic: userCourseInput.topic,
//         difficulty: userCourseInput.difficulty,
//         duration: userCourseInput.duration,
//         chapters: userCourseInput.chapters,
//       }),
//     });

//     // ✅ SAFER RESPONSE HANDLING
//     const text = await res.text();
//     let data;

//     try {
//       data = JSON.parse(text);
//     } catch {
//       throw new Error("API did not return valid JSON");
//     }

//     if (!res.ok) {
//       throw new Error(data.error || "Failed to generate course");
//     }

//     const result = await saveCourseLayout({
//       userCourseInput,
//       courseLayout: data.data,
//       userInfo: {
//         userId: user.id,
//         email: user.primaryEmailAddress?.emailAddress,
//         name: user.fullName,
//         image: user.imageUrl,
//       },
//     });

//     router.replace(`/create-course/${result.courseId}`);
//   } catch (err) {
//     console.error("❌ GenerateCourseLayout error:", err);
//   } finally {
//     setLoading(false);
//   }
// };


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

// "use client";

// import { useState, useEffect, useContext } from "react";
// import { HiMiniSquares2X2, HiSquare3Stack3D } from "react-icons/hi2";
// import { Button } from "../../components/ui/button";
// import LoadingDialog from "./_components/LoadingDialog";
// import SelectCategory from "./_components/SelectCategory";
// import TopDescription from "./_components/TopDescription";
// import SelectOption from "./_components/SelectOption";
// import { useUser } from '@clerk/nextjs'
// import { UserInputContext } from "../_context/UserInputContext";
// // import { db } from "@/configs/db";
// // import { Save } from "lucide-react";
// import { saveCourseLayout } from "@/app/actions/saveCourseLayout";
// import { useRouter } from 'next/navigation';


// function CreateCourse() {
//   const StepperOptions = [
//     { id: 1, name: "Category", icon: <HiMiniSquares2X2 /> },
//     { id: 2, name: "Details", icon: <HiSquare3Stack3D /> },
//     { id: 3, name: "Publish", icon: <HiMiniSquares2X2 /> },
//   ];

  
//   const [activateIndex, setActivateIndex] = useState(0);
//   const [loading, setLoading] = useState(false);
//    const {user}=useUser();
//    const router=useRouter();

//   const { userCourseInput } = useContext(UserInputContext);

//   const GenerateCourseLayout = async () => {
//   try {
//     setLoading(true);

//     const res = await fetch("/api/generate-course", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         category: userCourseInput.category,
//         topic: userCourseInput.topic,
//         difficulty: userCourseInput.difficulty,
//         duration: userCourseInput.duration,
//         chapters: userCourseInput.chapters,
//       }),
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       throw new Error(data.error || "Failed to generate course");
//     }

//     const result = await saveCourseLayout({
//   userCourseInput,
//   courseLayout: data.data,
//   userInfo: {
//     userId: user?.id,
//     email: user?.primaryEmailAddress?.emailAddress,
//     name: user?.fullName,
//     image: user?.imageUrl,
//   },
// });

// router.replace(`/create-course/${result.courseId}`);


//     console.log("Saved to DB ✅");
//   } catch (err) {
//     console.error(err);
//   } finally {
//     setLoading(false);
//   }
// };

//   // const GenerateCourseLayout = async () => {
//   //   try {
//   //     setLoading(true);

//   //     const res = await fetch("/api/generate-course", {
//   //       method: "POST",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       body: JSON.stringify({
//   //         category: userCourseInput.category,
//   //         topic: userCourseInput.topic,
//   //         difficulty: userCourseInput.difficulty,
//   //         duration: userCourseInput.duration,
//   //         chapters: userCourseInput.chapters,
//   //       }),
//   //     });

//   //     const data = await res.json();

//   //     if (!res.ok) {
//   //       throw new Error(data.error || "Failed to generate course");
//   //     }

//   //     console.log("AI RESULT →", data);

//   //     // later:
//   //     // setCourseLayout(data.data);

//   //   } catch (error) {
//   //     console.error("GenerateCourseLayout error:", error.message);
//   //   } finally {
//   //     setLoading(false);
//   //     SaveCourseLayoutInDb(JSON.parse(result.response?.text()));
//   //   }
//   // };

//   // const SaveCourseLayoutInDb=async(CourseLayout)=>{
//   //   var id=uuidv4();
//   //   setLoading(true)


//   //   const result=await db.insert(CourseList).values({
//   //     courseId:id,
//   //     name:userCourseInput?.topic,
//   //     level:userCourseInput?.difficulty,
//   //     category:userCourseInput?.category,
//   //     courseOutput:courseLayout,
//   //     createdBy:user?.primaryEmailAddress?.emailAddress,
//   //     userName:user?.fullName,
//   //     userProfileImage:user?.imageUrl



//   //   })
//   //   console.log("finish")
//   //   setLoading(false);
//   // }

//   const checkStatus = () => {
//     if (activateIndex === 0) {
//       return !userCourseInput.category;
//     }

//     if (activateIndex === 1) {
//       return !userCourseInput.topic;
//     }

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
//                 <h2 className="hidden md:block mt-2 text-sm">
//                   {item.name}
//                 </h2>
//               </div>

//               {index !== StepperOptions.length - 1 && (
//                 <div
//                   className={`h-1 w-[50px] md:w-[100px] lg:w-[170px] mx-2 rounded-full ${
//                     activateIndex > index
//                       ? "bg-[#5cbfb5]"
//                       : "bg-gray-300"
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
//             onClick={() =>
//               setActivateIndex((prev) => Math.max(prev - 1, 0))
//             }
//           >
//             Previous
//           </Button>

//           {activateIndex < 2 && (
//             <Button
//               disabled={checkStatus()}
//               onClick={() =>
//                 setActivateIndex((prev) =>
//                   Math.min(prev + 1, StepperOptions.length - 1)
//                 )
//               }
//             >
//               Next
//             </Button>
//           )}

//           {activateIndex === 2 && (
//             <Button
//               disabled={checkStatus()}
//               onClick={() => {
//                 GenerateCourseLayout();
//                 console.log("FINAL SUBMIT:", userCourseInput);
//               }}
//             >
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

  const GenerateCourseLayout = async () => {
    if (!user) return;

    try {
      setLoading(true);

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

      router.replace(`/create-course/${result.courseId}`);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

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
                  className={`p-4 rounded-full text-xl ${
                    activateIndex >= index
                      ? "bg-[#5cbfb5] text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {item.icon}
                </div>
                <h2 className="hidden md:block mt-2 text-sm">{item.name}</h2>
              </div>

              {index !== StepperOptions.length - 1 && (
                <div
                  className={`h-1 w-[50px] md:w-[100px] lg:w-[170px] mx-2 rounded-full ${
                    activateIndex > index ? "bg-[#5cbfb5]" : "bg-gray-300"
                  }`}
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
            onClick={() => setActivateIndex((p) => Math.max(p - 1, 0))}
          >
            Previous
          </Button>

          {activateIndex < 2 && (
            <Button
              disabled={checkStatus()}
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
            <Button disabled={checkStatus()} onClick={GenerateCourseLayout}>
              Generate Course Layout
            </Button>
          )}
        </div>
      </div>

      <LoadingDialog loading={loading} />
    </div>
  );
}

export default CreateCourse;