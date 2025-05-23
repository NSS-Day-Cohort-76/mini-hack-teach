import { Outlet, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/nav/NavBar.jsx";
import { Welcome } from "../components/welcome/Welcome.jsx";
import { useEffect, useState } from "react";
import { CourseList } from "../components/courses/CourseList.jsx";
// import { CourseDetails } from "../components/courses/courseDetails.jsx";
import { EditPostForm } from "../components/editpostform/editPostForm.jsx";
import { CourseForm } from "../components/courses/CourseForm.jsx"
import { YourCourses } from "../components/courses/YourCourses.jsx";


export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const locall2codeUser = localStorage.getItem("l2code_user");
    const l2codeUserObject = JSON.parse(locall2codeUser);

    setCurrentUser(l2codeUserObject);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome currentUser={currentUser} />} />
        <Route
          path="course-list"
          element={<CourseList currentUser={currentUser} />}
        >
          <Route
            path="course-details/:courseId"
            // element={<CourseDetails currentUser={currentUser} />}
          />
        </Route>
        <Route path="new-post" element={< CourseForm currentUser={currentUser} />} />

        <Route 
        path="coaches-list" 
        element={<YourCourses currentUser={currentUser} />} 
        >
        <Route
          path="edit-post/:courseId"
          element={<EditPostForm currentUser={currentUser} />}
        />
        </Route>
      </Route>
    </Routes>
  );
};
