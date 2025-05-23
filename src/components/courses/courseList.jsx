import { useEffect, useState } from "react";
import { getAllCourses } from "../../Services/userService.jsx";
import { Link } from "react-router-dom";
import "./CourseList.css"


export const CourseList = ({currentUser}) => {
  const [ allCourses, setAllCourses] = useState([])


useEffect(() => {
  getAllCourses().then(setAllCourses)
}, [currentUser])

// Function to format rate as USD
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(amount)
    }


return (
 <article>
      {allCourses.map((course) => (
        <section
          className="course-section"
          key={course.id}
          
        >
      <ol className="course-card">
        <Link to={`/coursedetails/${course.id}`}>
          <header className="course-card__header">{course.picture}</header>

          <div className="course-card__row">
            <div className="course-card__label">{course.name}</div>
            {/* <div className="course-card__value">{course.name}</div> */}
          </div>

          <div className="course-card__row">
            <div className="course-card__label">Rating:</div>
            <div className="course-card__value">{course.rating}</div>
          </div>

          <div className="course-card__row">
            <div className="course-card__label">Price:</div>
            <div className="course-card__value">{formatCurrency(course.price)} Hours</div>
          </div>
        </Link>
      </ol>
    </section>
  ))};
  </article>
  )
}