import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import FeedbackList from "../components/FeedbackList";

const Admin = () => {
  const [feedbacks] = useState([
    { ratings: [5, 4], comments: ["Great", "Good"] },
  ]);

  return (
    <div>
      <Dashboard title="Admin Dashboard" stats={["Total Feedbacks: " + feedbacks.length]} />
      <FeedbackList feedbacks={feedbacks} />
    </div>
  );
};

export default Admin;
