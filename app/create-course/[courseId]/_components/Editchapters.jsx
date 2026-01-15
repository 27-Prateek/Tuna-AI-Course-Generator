
//   // "use client";

//   // import React, { useState } from "react";
//   // import { HiOutlinePencilAlt } from "react-icons/hi";
//   // import { Textarea } from "@/components/ui/textarea";
//   // import { Button } from "@/components/ui/button";
//   // import {
//   //   Dialog,
//   //   DialogContent,
//   //   DialogHeader,
//   //   DialogTitle,
//   //   DialogTrigger,
//   //   DialogFooter,
//   //   DialogClose,
//   //   DialogDescription,
//   // } from "@/components/ui/dialog";

//   // function Editchapters({ chapter, index }) {
//   //   const [chapterName, setChapterName] = useState(
//   //     chapter?.chapterName || `Chapter ${index + 1}`
//   //   );
//   //   const [explanation, setExplanation] = useState(
//   //     chapter?.explanation || ""
//   //   );

//   //   return (
//   //     <Dialog>
//   //       <DialogTrigger asChild>
//   //         <HiOutlinePencilAlt className="text-sm cursor-pointer text-gray-400 hover:text-black" />
//   //       </DialogTrigger>

//   //       <DialogContent>
//   //         <DialogHeader>
//   //           <DialogTitle>Edit Chapter {index + 1}</DialogTitle>
//   //           <DialogDescription>
//   //             Update the chapter title and description.
//   //           </DialogDescription>
//   //         </DialogHeader>

//   //         {/* Chapter Name */}
//   //         <div className="mt-3">
//   //           <label className="text-xs font-medium text-gray-600">
//   //             Chapter Name
//   //           </label>
//   //           <input
//   //             value={chapterName}
//   //             onChange={(e) => setChapterName(e.target.value)}
//   //             className="w-full mt-1 border rounded-md px-3 py-2 text-sm outline-none
//   //               focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
//   //           />
//   //         </div>

//   //         {/* Chapter Description */}
//   //         <div className="mt-3">
//   //           <label className="text-xs font-medium text-gray-600">
//   //             Description
//   //           </label>
//   //           <Textarea
//   //             value={explanation}
//   //             onChange={(e) => setExplanation(e.target.value)}
//   //             rows={5}
//   //             className="mt-1 outline-none
//   //               focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
//   //           />
//   //         </div>

//   //         <DialogFooter className="mt-4">
//   //           <DialogClose asChild>
//   //             <Button variant="outline">Cancel</Button>
//   //           </DialogClose>

//   //           <Button
//   //             onClick={() => {
//   //               console.log("Updated Chapter:", {
//   //                 index,
//   //                 chapterName,
//   //                 explanation,
//   //               });
//   //             }}
//   //           >
//   //             Save
//   //           </Button>
//   //         </DialogFooter>
//   //       </DialogContent>
//   //     </Dialog>
//   //   );
//   // }

//   // export default Editchapters;
// "use client";

// import React, { useState } from "react";
// import { HiOutlinePencilAlt } from "react-icons/hi";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
//   DialogFooter,
//   DialogClose,
//   DialogDescription,
// } from "@/components/ui/dialog";
// import { updateChapters } from "@/app/actions/updatechapters";

// function Editchapters({ chapter, index, courseId, onUpdated }) {
//   const [chapterName, setChapterName] = useState(chapter.chapterName);
//   const [explanation, setExplanation] = useState(chapter.explanation);
//   const [loading, setLoading] = useState(false);

//   const handleSave = async () => {
//     try {
//       setLoading(true);

//       await updateChapters({
//         courseId,
//         chapterIndex: index,
//         chapterName,
//         explanation,
//       });

//       // 🔁 Update UI instantly
//       onUpdated({ index, chapterName, explanation });
//     } catch (err) {
//       console.error("Update chapter failed:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <HiOutlinePencilAlt className="text-sm cursor-pointer text-gray-400 hover:text-black" />
//       </DialogTrigger>

//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle>Edit Chapter {index + 1}</DialogTitle>
//           <DialogDescription>
//             Update the chapter title and description.
//           </DialogDescription>
//         </DialogHeader>

//         <div className="mt-3">
//           <label className="text-xs font-medium text-gray-600">
//             Chapter Name
//           </label>
//           <input
//             value={chapterName}
//             onChange={(e) => setChapterName(e.target.value)}
//             className="w-full mt-1 border rounded-md px-3 py-2 text-sm outline-none
//                        focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
//           />
//         </div>

//         <div className="mt-3">
//           <label className="text-xs font-medium text-gray-600">
//             Description
//           </label>
//           <Textarea
//             value={explanation}
//             onChange={(e) => setExplanation(e.target.value)}
//             rows={5}
//             className="mt-1 outline-none
//                        focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
//           />
//         </div>

//         <DialogFooter className="mt-4">
//           <DialogClose asChild>
//             <Button variant="outline">Cancel</Button>
//           </DialogClose>

//           <Button onClick={handleSave} disabled={loading}>
//             {loading ? "Saving..." : "Save"}
//           </Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// }

// export default Editchapters;
"use client";

import React, { useState } from "react";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
  DialogDescription,
} from "@/components/ui/dialog";
import { updateChapters } from "@/app/actions/updatechapters";

function Editchapters({ chapter, index, courseId, onUpdated }) {
  const [chapterName, setChapterName] = useState(chapter.chapterName);
  const [explanation, setExplanation] = useState(chapter.explanation);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false); // ✅ CONTROL DIALOG

  const handleSave = async () => {
    try {
      setLoading(true);

      await updateChapters({
        courseId,
        chapterIndex: index,
        chapterName,
        explanation,
      });

      onUpdated({ index, chapterName, explanation });

      setOpen(false); // ✅ CLOSE DIALOG
    } catch (err) {
      console.error("Update chapter failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <HiOutlinePencilAlt
          onClick={() => setOpen(true)}
          className="text-sm cursor-pointer text-gray-400 hover:text-black"
        />
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Chapter {index + 1}</DialogTitle>
          <DialogDescription>
            Update the chapter title and description.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-3">
          <label className="text-xs font-medium text-gray-600">
            Chapter Name
          </label>
          <input
            value={chapterName}
            onChange={(e) => setChapterName(e.target.value)}
            className="w-full mt-1 border rounded-md px-3 py-2 text-sm outline-none
                       focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
          />
        </div>

        <div className="mt-3">
          <label className="text-xs font-medium text-gray-600">
            Description
          </label>
          <Textarea
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
            rows={5}
            className="mt-1 outline-none
                       focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
          />
        </div>

        <DialogFooter className="mt-4">
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>

          <Button onClick={handleSave} disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default Editchapters;
