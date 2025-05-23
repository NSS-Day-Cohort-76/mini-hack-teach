export const getUserByEmail = (email) => {
  return fetch(`http://localhost:8088/users?email=${email}`).then((res) =>
    res.json()
  );
};

export const createUser = (customer) => {
  return fetch(`http://localhost:8088/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  }).then((res) => res.json());
};


export const getAllCourses = () => {
  return fetch(`http://localhost:8088/courses`).then((res) =>
    res.json()
  );
};
export const getCoursesByUserId = (userId) => {
  return fetch(`http://localhost:8088/courses/?userId=${userId}`).then((res) =>
    res.json()
  );
};