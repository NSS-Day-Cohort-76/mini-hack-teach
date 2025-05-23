import { useEffect, useState } from "react";
import { getAllCourses, getCoursesByUserId } from "../../Services/userService.jsx";
import { Link, useParams } from "react-router-dom";
import "./CourseList.css"
import { CourseCard } from "./CourseCard.jsx";


export const YourCourses = ({ currentUser }) => {
  const [allCourses, setAllCourses] = useState([])
  const [ currentUserCourses, setCurrentUserCourses ] = useState([])
  const { courseId } = useParams()

  useEffect(() => {
    getAllCourses().then(setAllCourses)
  }, [currentUser])

  useEffect(() => {
    getCoursesByUserId(currentUser.id)
      .then((allCoursesArray) => {
        // const filteredCourse = allCoursesArray.filter(
        //   (event) => event.userId === currentUser.id
        // )
        setCurrentUserCourses(allCoursesArray)
      })
      .catch((error) => console.error("Error fetching event types:", error))
  }, [currentUser])



  return (
    <article>
      {currentUserCourses.map((course) => (
        <section
          className="course-section"
          key={course.id}
        >
          <Link to={`/edit-post/${course.id}`} >
            < CourseCard
              currentUser={currentUser}
              allCourses={allCourses}
              courseId={courseId}
              course={course}
            />
          </Link>

        </section>
      ))};
    </article>
  )
}