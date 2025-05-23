export const CourseCard = ({ course }) => {

    // Function to format rate as USD
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(amount)
    }


    return (

        <ol className="course-card">

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
        </ol>
    )
};