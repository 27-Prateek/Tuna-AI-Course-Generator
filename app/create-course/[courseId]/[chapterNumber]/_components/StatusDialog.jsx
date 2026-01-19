// // import React from 'react'
// // import Image from 'next/image'
// // import {
// //   AlertDialog,
// //   AlertDialogAction,
// //   AlertDialogCancel,
// //   AlertDialogContent,
// //   AlertDialogDescription,
// //   AlertDialogFooter,
// //   AlertDialogHeader,
// //   AlertDialogTitle,
// //   AlertDialogTrigger,
// // } from "@/components/ui/alert-dialog"

// // function LoadingDialog({loading}) {
// //   return (
// //     <div>
// //         <AlertDialog open={loading}>
// //         <AlertDialogContent>
// //   <AlertDialogHeader>
// //     <AlertDialogTitle>Generating Course</AlertDialogTitle>
// //   </AlertDialogHeader>

// //   <div className="flex justify-center py-4">
// //     <Image
// //       src="/fish.gif"
// //       width={100}
// //       height={100}
// //       alt="Loading"
// //     />
// //   </div>

// //   <AlertDialogDescription>
// //     Please wait while we generate your course layout…
// //   </AlertDialogDescription>
// // </AlertDialogContent>

// //         </AlertDialog>

// //     </div>
// //   )
// // }
// // export default LoadingDialog
// import React from 'react'
// import Image from 'next/image'
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog"

// function LoadingDialog({loading}) {
//   return (
//     <div>
//         <AlertDialog open={loading}>
//         <AlertDialogContent>
//   <AlertDialogHeader>
//     <AlertDialogTitle>Generating Course</AlertDialogTitle>
//   </AlertDialogHeader>

//   <div className="flex justify-center py-4">
//     <Image
//       src="/fish.gif"
//       width={100}
//       height={100}
//       alt="Loading"
//     />
//   </div>

//   <AlertDialogDescription>
//     Please wait while we generate your course layout…
//   </AlertDialogDescription>
// </AlertDialogContent>

//         </AlertDialog>

//     </div>
//   )
// }
// export default LoadingDialog

"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function StatusDialog({
  open,
  onClose,
  title,
  description,
}) {
  return (
    <AlertDialog open={open} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription className="whitespace-pre-line">
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="flex justify-end mt-4">
          <AlertDialogAction onClick={onClose}>
            OK
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
