import React from "react";
import {
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";

export default function Learn() {
  return (
    <div>
      <h1>Learn</h1>
      <h2>All courses are listed here</h2>
      <Link to="/learn/courses">Courses</Link>|
      <Link to="/learn/bundles">Bundles</Link>
      <Outlet />
    </div>
  );
}

export function Courses() {
  const courseList = ["React", "Angular", "Vue", "Nodejs"];
  const randomCourse =
    courseList[Math.floor(Math.random() * courseList.length)];
  return (
    <div>
      <h1>Courses list</h1>
      <h4>Courses card</h4>
      <h3>
        <NavLink to={`/learn/courses/${randomCourse}`}>{randomCourse}</NavLink>
      </h3>
      <Outlet />
    </div>
  );
}

export function Bundles() {
  return (
    <div>
      <h1>Bundles list</h1>
      <h4>Bundles card</h4>
    </div>
  );
}
export function Dashboard() {
  const location = useLocation();
  return (
    <div>
      <h1>Info got from naviagte : {location.state}</h1>
    </div>
  );
}
export function CourseId() {
  const { courseid } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <h1>URL params is :{courseid}</h1>
      <button onClick={() => navigate("/dashboard", { state: courseid })}>
        Price
      </button>
      <Link to={"/dashboard"} state={"DJANGO"}>
        More
      </Link>
    </div>
  );
}
