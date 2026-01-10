"use client";

import { useState } from "react";
import Header from "../dashboard/_components/Header";
import { UserInputContext } from "../_context/UserInputContext";

function CreateCourseLayout({ children }) {
  const [userCourseInput, setUserCourseInput] = useState({
    // category: "",
    // topic: "",
    // description: "",
    // difficulty: "",
    // duration: "",
    // includeVideo: "",
    // chapters: 0,
  });

  return (
    <UserInputContext.Provider
      value={{ userCourseInput, setUserCourseInput }}
    >
      <Header />
      {children}
    </UserInputContext.Provider>
  );
}

export default CreateCourseLayout;
