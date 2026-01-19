
// "use client";

// import { useParams, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { useUser } from "@clerk/nextjs";

// import { getCourse_1 } from "@/app/actions/getpublicCoursecontent";
// import { generateChapters } from "@/app/actions/generateChapters";

// import ChapterHeader from "./_components/ChapterHeader";
// import ChapterVideo from "./_components/ChapterVideo";
// import ChapterExplanation from "./_components/ChapterExplanation";
// import ChapterCode from "./_components/ChapterCode";
// import ChapterNavigation from "./_components/ChapterNavigation";
// import ChapterSkeleton from "./_components/ChapterSkeleton";
// import StatusDialog from "./_components/StatusDialog";

// export default function ChapterPage() {
//   const { courseId, chapterNumber } = useParams();
//   const router = useRouter();
//   const { user, isLoaded } = useUser();

//   const currentChapter = Number(chapterNumber);

//   const [course, setCourse] = useState(null);
//   const [chapter, setChapter] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [generating, setGenerating] = useState(false);

//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [dialogTitle, setDialogTitle] = useState("");
//   const [dialogDescription, setDialogDescription] = useState("");

//   /* --------------------------------
//      FETCH CHAPTER SAFELY
//   -------------------------------- */
//   useEffect(() => {
//     if (!isLoaded || !user) return;
//     fetchChapter();
//   }, [isLoaded, user, chapterNumber]);

//   const fetchChapter = async () => {
//     setLoading(true);

//     const result = await getCourse_1(
//       courseId,
//     );

//     const courseData = result?.[0];
//     if (!courseData) return;

//     setCourse(courseData);

//     const createdChapters =
//       courseData.numberOfChaptersCreated ?? 0;

//     if (currentChapter > createdChapters) {
//       setDialogTitle("Follow Chapter Order");
//       setDialogDescription(
//         "Kindly study the course in chapter-wise order.\n\nYou will be redirected to the last available chapter."
//       );
//       setDialogOpen(true);

//       const safeChapter = createdChapters > 0 ? createdChapters : 1;
//       router.replace(`/create-course/${courseId}/${safeChapter}`);
//       setLoading(false);
//       return;
//     }

//     const found = courseData.chaptersContent?.find(
//       (c) => c.chapterNumber === currentChapter
//     );

//     setChapter(found || null);
//     setLoading(false);
//   };

//   /* --------------------------------
//      NEXT CHAPTER
//   -------------------------------- */
//   const handleNext = async () => {
//     if (generating) return;
//     setGenerating(true);

//     try {
//       // ✅ If already generated → navigate
//       if (currentChapter < course.numberOfChaptersCreated) {
//         router.push(`/create-course/${courseId}/${currentChapter + 1}`);
//         return;
//       }

//       // 🚀 Generate next chapter
//       const res = await generateChapters(courseId);

//       if (!res?.success) {
//         setDialogTitle("Server Busy");
//         setDialogDescription(
//           "The server is under heavy load right now.\n\nPlease try again after some time."
//         );
//         setDialogOpen(true);
//         return;
//       }

//       router.push(`/create-course/${courseId}/${currentChapter + 1}`);
//     } catch (err) {
//       console.error(err);

//       setDialogTitle("Something went wrong");
//       setDialogDescription(
//         "An unexpected error occurred.\nPlease refresh and try again."
//       );
//       setDialogOpen(true);
//     } finally {
//       setGenerating(false);
//     }
//   };

//   /* --------------------------------
//      PREVIOUS CHAPTER
//   -------------------------------- */
//   const handlePrev = () => {
//     if (currentChapter <= 1) return;
//     router.push(`/create-course/${courseId}/${currentChapter - 1}`);
//   };

//   /* --------------------------------
//      LOADING
//   -------------------------------- */
//   if (loading || !chapter) {
//     return <ChapterSkeleton />;
//   }

//   /* --------------------------------
//      NEXT BUTTON VISIBILITY (FIX)
//   -------------------------------- */
//   const totalChapters =
//     course?.numberOfChaptersCreated ?? 0;

//   const isLastChapter = currentChapter >= totalChapters;

//   /* --------------------------------
//      UI
//   -------------------------------- */
//   return (
//     <div className="px-6 md:px-20 lg:px-44 py-10">
//       <ChapterHeader chapter={chapter} />

//       <ChapterVideo youtubeUrl={chapter.youtubeUrl} />
      
//       <ChapterExplanation explanation={chapter.explanation} />
//       <ChapterCode code={chapter.code_example} />

//       <ChapterNavigation
//         hasPrev={currentChapter > 1}
//         hasNext={!isLastChapter}
//         loading={generating}
//         onPrev={handlePrev}
//         onNext={handleNext}
//       />

//       <StatusDialog
//         open={dialogOpen}
//         onClose={() => setDialogOpen(false)}
//         title={dialogTitle}
//         description={dialogDescription}
//       />
//     </div>
//   );
// }
"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

import { getCourse_1 } from "@/app/actions/getpublicCoursecontent";

import ChapterHeader from "./_components/ChapterHeader";
import ChapterVideo from "./_components/ChapterVideo";
import ChapterExplanation from "./_components/ChapterExplanation";
import ChapterCode from "./_components/ChapterCode";
import ChapterNavigation from "./_components/ChapterNavigation";
import ChapterSkeleton from "./_components/ChapterSkeleton";
import StatusDialog from "./_components/StatusDialog";

export default function ChapterPage() {
  const { courseId, chapterNumber } = useParams();
  const router = useRouter();
  const { isLoaded } = useUser();

  const currentChapter = Number(chapterNumber);

  const [course, setCourse] = useState(null);
  const [chapter, setChapter] = useState(null);
  const [loading, setLoading] = useState(true);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogDescription, setDialogDescription] = useState("");

  /* -------------------------------
     FETCH CHAPTER SAFELY (PUBLIC)
  -------------------------------- */
  useEffect(() => {
    if (!isLoaded) return;
    fetchChapter();
  }, [isLoaded, chapterNumber]);

  const fetchChapter = async () => {
    setLoading(true);

    const result = await getCourse_1(courseId);
    const courseData = result?.[0];

    if (!courseData) {
      setLoading(false);
      return;
    }

    setCourse(courseData);

    const createdChapters =
      courseData.numberOfChaptersCreated ?? 0;

    // 🚫 User manually opened future chapter
    if (currentChapter > createdChapters) {
      setDialogTitle("Follow Chapter Order");
      setDialogDescription(
        "Kindly study the course in chapter-wise order.\n\nRedirecting you to the last available chapter."
      );
      setDialogOpen(true);

      const safeChapter =
        createdChapters > 0 ? createdChapters : 1;

      router.replace(`/${courseId}/${safeChapter}`);
      setLoading(false);
      return;
    }

    const found = courseData.chaptersContent?.find(
      (c) => c.chapterNumber === currentChapter
    );

    setChapter(found || null);
    setLoading(false);
  };

  /* -------------------------------
     NAVIGATION
  -------------------------------- */
  const handleNext = () => {
    if (currentChapter >= course.numberOfChaptersCreated) return;
    router.push(`/${courseId}/${currentChapter + 1}`);
  };

  // const handlePrev = () => {
  //   if (currentChapter <= 1) return;
  //   router.push(`/${courseId}/${currentChapter - 1}`);
  // };

  const handlePrev = () => {
  // 🔹 If user is on Chapter 1 → go back to course overview
  if (currentChapter === 1) {
    router.push(`/${courseId}`);
    return;
  }

  // 🔹 Normal previous chapter navigation
  router.push(`/${courseId}/${currentChapter - 1}`);
};


  /* -------------------------------
     LOADING
  -------------------------------- */
  if (loading || !chapter) {
    return <ChapterSkeleton />;
  }

  const isLastChapter =
    currentChapter >= course.numberOfChaptersCreated;

  /* -------------------------------
     UI
  -------------------------------- */
  return (
    <div className="px-6 md:px-20 lg:px-44 py-10">
      <ChapterHeader chapter={chapter} />

      {/* ✅ VIDEO ONLY IF ENABLED
      {course.includeVideo && chapter.youtubeUrl && (
        <ChapterVideo youtubeUrl={chapter.youtubeUrl} />
      )} */}

      {/* ✅ VIDEO ONLY IF ENABLED */}
      {course.includeVideo === "Yes" && chapter.youtubeUrl && (
      <ChapterVideo youtubeUrl={chapter.youtubeUrl} /> 
      )}


      <ChapterExplanation explanation={chapter.explanation} />
      <ChapterCode code={chapter.code_example} />

      <ChapterNavigation
        hasPrev={currentChapter > 0}
        hasNext={!isLastChapter}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      <StatusDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        title={dialogTitle}
        description={dialogDescription}
      />
    </div>
  );
}
