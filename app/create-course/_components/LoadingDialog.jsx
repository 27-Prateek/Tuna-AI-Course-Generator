import React from 'react'
import Image from 'next/image'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

function LoadingDialog({loading}) {
  return (
    <div>
        <AlertDialog open={loading}>
        <AlertDialogContent>
  <AlertDialogHeader>
    <AlertDialogTitle>Generating Course</AlertDialogTitle>
  </AlertDialogHeader>

  <div className="flex justify-center py-4">
    <Image
      src="/fish.gif"
      width={100}
      height={100}
      alt="Loading"
    />
  </div>

  <AlertDialogDescription>
    Please wait while we generate your course layout…
  </AlertDialogDescription>
</AlertDialogContent>

        </AlertDialog>

    </div>
  )
}
export default LoadingDialog