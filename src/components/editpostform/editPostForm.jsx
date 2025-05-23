import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCourseById } from "../../Services/getCourseById.jsx";
import { EditCourse } from "../../Services/EditCourseService.jsx";
import { GetAllCourses } from "../../Services/GetAllCourses.jsx";
import { GetAllLanguages } from "../../Services/GetAllLanguages.jsx";

export const EditPostForm = (currentUser) => {
  const [course, setCourse] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const { courseId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    GetAllCourses().then(setCourse);
  }, []);

  useEffect(() => {
    GetAllLanguages().then(setLanguages);
  }, []);

  useEffect(() => {
    getCourseById(courseId).then((postData) => {
      setName(postData.name);
      setDescription(postData.description);
      setPrice(postData.price);
      setRating(postData.rating);
    });
  }, [courseId]);

  const handleEditSubmit = (event) => {
    event.preventDefault();
    const courseObj = {
      ...course,
      name: name,
      description: description,
      price: price,
      rating: rating,
      lastUpdated: new Date().toString().slice(0, 10),
    };
    EditCourse(courseId, courseObj).then(navigate("/coacheslist"));
  };

  return (
    <section className="editpost-container">
      <div>
        <header>Edit Course Info</header>
        <form onSubmit={handleEditSubmit}>
          <label>Edit Name</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <label>Edit Description</label>
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <label>Edit Price</label>
          <input
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
          <label>Edit Rating</label>
          <input
            type="number"
            value={rating}
            onChange={(event) => setRating(event.target.value)}
          />
          <label>Languages</label>
          <select
            value={selectedLanguage}
            onChange={(event) => setLanguages(event.target.value)}
          >
            <option value="" disabled>
              Select Language
            </option>
            {languages.map((language) => {
              <option key={language.id} value={language.id}>
                {language.lang}
              </option>;
            })}
          </select>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </section>
  );
};
