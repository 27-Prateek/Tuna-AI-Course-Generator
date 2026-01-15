
"use client";

import React, { useRef } from "react";
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

} from "@/components/ui/dialog";
import { updateCourseBasicInfo } from "@/app/actions/updatecourse_layout";

function EditCourseBasicInfo({ course, onUpdated }) {
  const data = course?.[0];

  const titleRef = useRef(null);
  const desRef = useRef(null);

  const onUpdateHandler = async () => {
    const courseName = titleRef.current.value;
    const description = desRef.current.value;

    await updateCourseBasicInfo({
      id: data.id,
      courseName,
      description,
    });

    onUpdated({
      courseName,
      description,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="p-1 rounded hover:bg-gray-100 transition"
        >
          <HiOutlinePencilAlt className="text-2xl cursor-pointer" />
        </button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Course Title & Description</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          <input
            ref={titleRef}
            defaultValue={data?.courseOutput?.courseName}
            className="w-full border p-2 rounded"
          />

          <Textarea
            ref={desRef}
            defaultValue={data?.courseOutput?.description}
          />
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={onUpdateHandler}>
              Update
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EditCourseBasicInfo;
