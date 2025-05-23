import { Outlet, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/nav/NavBar.jsx";
import { Welcome } from "../components/welcome/Welcome.jsx";
import { useEffect, useState } from "react";
import { CourseList } from "../components/courses/courseList.jsx";
import { CourseDetails } from "../components/courses/courseDetails.jsx";

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
          path="courselist"
          element={<CourseList currentUser={currentUser} />}
        >
          <Route
            path="coursedetails/:id"
            element={<CourseDetails currentUser={currentUser} />}
          />
        </Route>
        <Route path="newpost" />
      </Route>
    </Routes>
  );
};
