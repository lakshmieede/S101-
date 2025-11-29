import React, { useState } from "react";
import FeedbackForm from "../components/FeedbackForm";

const Student = () => {
  const [submittedFeedbacks, setSubmittedFeedbacks] = useState([]);

  const questions = ["Quality of teaching?", "Clarity of concepts?"];

  const handleSubmit = (feedback) => {
    setSubmittedFeedbacks([...submittedFeedbacks, feedback]);
  };

  return (
    <div>
      <FeedbackForm
        formTitle="Course Feedback"
        questions={questions}
        onSubmit={handleSubmit}
      />
      <h3>Previous Submissions:</h3>
      <ul>
        {submittedFeedbacks.map((fb, i) => (
          <li key={i}>
            Ratings: {fb.ratings.join(", ")} | Comments: {fb.comments.join("; ")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Student;
