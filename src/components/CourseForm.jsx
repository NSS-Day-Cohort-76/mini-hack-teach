import { useState } from "react"
import { addCourse } from "../Services/CourseService"
import { useNavigate } from "react-router-dom"

export const CourseForm = ({currentUser}) => {
    const [newCourse, setNewCourse] = useState({name: "", description: "", price: 0, coursePicture: "", userId: 0, lang: "", rating: 0})
    const navigate = useNavigate()


    const handleSave = (event) => {
        event.preventDefault() 
    if (newCourse.name) {
        const courseToSave = {
            name: newCourse.name,
            description: newCourse.description,
            price: newCourse.price,
            coursePicture: newCourse.coursePicture,
            userId: currentUser.id,
            lang: newCourse.lang,
            rating: newCourse.rating

        }
        addCourse(courseToSave).then(() => {
            navigate("courselist")
        })
    }
    
    }


    return (
        <form onSubmit={handleSave}>
            <h2>Add New Course</h2>
            <fieldset>
                <div className="form-group">
                    <label>Name</label>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Name of Course"
                    onChange={(event) => {
                        const courseCopy = {...newCourse}
                        courseCopy.name = event.target.value
                        setNewCourse(courseCopy)
                    }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Description</label>
                    <input 
                    type="text"
                    className="form-control"
                    placeholder="Description of Course"
                    onChange={(event) => {
                        const courseCopy = {...newCourse}
                        courseCopy.description = event.target.value
                        setNewCourse(courseCopy)
                    }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label>Course Img</label>
                    <input 
                    type="text"
                    className="form-control"
                    placeholder="Img URL"
                    onChange={(event) => {
                        const courseCopy = {...newCourse}
                        courseCopy.coursePicture = event.target.value
                        setNewCourse(courseCopy)
                    }}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div>
                <label>Price</label>
                <input
                type="number"
                className="form-control"
                placeholder="Price for Course"
                onChange={(event) => {
                    const courseCopy = {...newCourse}
                    courseCopy.price = event.target.value
                    setNewCourse(courseCopy)
                }}
                />
                </div>
            </fieldset>
        </form>
    )
}