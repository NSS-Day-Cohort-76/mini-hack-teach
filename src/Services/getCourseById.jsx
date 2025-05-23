export const getCourseById = (id) => {
  return fetch(`http://localhost:8088/courses/${id}`).then((res) => res.json());
};
