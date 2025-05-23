export const EditCourse = (id, course) => {
  return fetch(`http://localhost:8088/courses/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(course),
  }).then((res) => res.json());
};
