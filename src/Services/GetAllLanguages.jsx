export const GetAllLanguages = () => {
  return fetch(`http://localhost:8088/languages`).then((res) => res.json());
};
