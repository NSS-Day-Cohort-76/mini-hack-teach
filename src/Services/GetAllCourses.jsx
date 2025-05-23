export const GetAllCourses = () => {
  return fetch(`http://localhost:8088/courses`).then((res) => res.json());
};
