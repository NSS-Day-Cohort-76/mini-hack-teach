import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link to="/">Home</Link>
      </li>
      <li className="navbar-item">
        <Link to="/course-list">Courses Offered</Link>
      </li>
      <li className="navbar-item">
        <Link to="/new-post">Create New Course Profile</Link>
      </li>
      <li className="navbar-item ">
        <Link to="/coaches-list">Your Courses</Link>
      </li>
      {localStorage.getItem("l2code_user") ? (
        <li className="navbar-item navbar-logout">
          <Link
            className="navbar-link"
            to=""
            onClick={() => {
              localStorage.removeItem("l2code_user");
              navigate("/", { replace: true });
            }}
          >
            Logout
          </Link>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};
