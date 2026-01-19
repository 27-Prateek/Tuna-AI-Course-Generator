import React from 'react'
import { HiOutlineChartBar } from "react-icons/hi";
import { HiOutlineClock } from "react-icons/hi";
import { HiOutlineBookOpen } from "react-icons/hi";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { HiOutlinePlay } from "react-icons/hi";



function CourseDetail({ course }) {
  const data = course?.[0];

  return (
    <div className="border p-6 rounded-xl shadow-sm mt-3">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        <div className="flex gap-2">
          <HiOutlineChartBar className="text-4xl text-[#7c6ee6]" />
          <div>
            <h2 className="text-xs text-gray-500">Skill Level</h2>
            <h2 className="font-medium text-lg">
              {data?.courseOutput?.difficulty}
            </h2>
          </div>
        </div>

        <div className="flex gap-2">
          <HiOutlineClock  className="text-4xl text-[#7c6ee6]" />
          <div>
            <h2 className="text-xs text-gray-500">Duration</h2>
            <h2 className="font-medium text-lg">
                
              {data?.courseOutput?.duration}
            </h2>
          </div>
        </div>

        <div className="flex gap-2">
          <HiOutlineBookOpen  className="text-4xl text-[#7c6ee6]" />
          <div>
            <h2 className="text-xs text-gray-500">No. Of Chatpers</h2>
            <h2 className="font-medium text-lg">
              
              {data?.courseOutput?.chapters?.length}
            </h2>
          </div>
        </div>

        <div className="flex gap-2">
          <HiOutlinePlay  className="text-4xl text-[#7c6ee6]" />
          <div>
            <h2 className="text-xs text-gray-500">Video Included</h2>
            <h2 className="font-medium text-lg">
              {data?.includeVideo}
            </h2>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CourseDetail;
