export const getCourses = () => {
    return fetch("http://localhost:8088/courses").then((res) => res.json())

}

export const addCourse = (newCourse) => {
    return fetch("http://localhost:8088/courses", {
        method: "POST",
        headers: {"Content-Type": "application/json",},
        body: JSON.stringify(newCourse)
    })
}