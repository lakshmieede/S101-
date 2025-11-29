import React from "react";

const FeedbackList = ({ feedbacks }) => (
  <div className="container">
    <h2>Submitted Feedback</h2>
    {feedbacks.length === 0 ? (
      <p>No feedback yet.</p>
    ) : (
      <ul>
        {feedbacks.map((fb, idx) => (
          <li key={idx}>
            Ratings: {fb.ratings.join(", ")} | Comments: {fb.comments.join("; ")}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default FeedbackList;
