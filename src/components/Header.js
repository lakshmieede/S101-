import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Student-Teacher Feedback App</h1>
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/admin">Admin</Link> |{" "}
      <Link to="/student">Student</Link>
    </nav>
  </header>
);

export default Header;
