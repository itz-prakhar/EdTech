import React from "react";
import RenderSteps from "./RenderSteps";

const AddCourse = () => {
  return (
    <div className="h-full py-10 text-richblack-5">
      <div className="flex flex-col w-9/12 mx-auto ">
        <h1 className="text-3xl font-semibold">Add Course</h1>
        <div className="flex flex-col xl:flex-row justify-between items-start gap-10">
          <RenderSteps />
          {/* CourseDetails Section */}
          <div className="bg-richblack-800 flex flex-col gap-5 max-w-[380px] rounded-lg border-[1px] border-richblack-700 p-6">
            <p className="text-lg font-semibold ">⚡Course Upload Tips </p>
            <ul className="flex text-xs flex-col gap-3 list-inside list-disc">
              <li>Set the Course Price option or make it free. </li>
              <li>Standard size for the course thumbnail is 1024x576. </li>
              <li>Video section controls the course overview video. </li>
              <li>Course Builder is where you create & organize a course.</li>
              <li>Add Topics in the Course Builder section to create lessons, quizzes, and assignments.</li>
              <li>Information from the Additional Data section shows up on the course single page. </li>
              <li>Make Announcements to notify any important </li>
              <li>Notes to all enrolled students at once.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
