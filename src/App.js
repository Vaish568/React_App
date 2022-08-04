import React from "react";
import Form from "./Components/form";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import styles from "./App.css";
import Home from "./Components/Home";
import Learn, {
  Bundles,
  CourseId,
  Courses,
  Dashboard,
} from "./Components/Learn";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/myapps" element={<Navigate replace to="/learn" />} />
        <Route path="/learn" element={<Learn />}>
          <Route path="courses" element={<Courses />}>
            <Route path=":courseid" element={<CourseId />} />
          </Route>
          <Route path="bundles" element={<Bundles />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
