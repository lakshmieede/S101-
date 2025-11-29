import React, { useState } from "react";

const FeedbackForm = ({ formTitle, questions, onSubmit }) => {
  const [ratings, setRatings] = useState(Array(questions.length).fill(0));
  const [comments, setComments] = useState(Array(questions.length).fill(""));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ratings, comments });
    alert("Feedback submitted!");
  };

  return (
    <div className="container">
      <h2>{formTitle}</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((q, i) => (
          <div key={i}>
            <p>{q}</p>
            <input
              type="number"
              min="1"
              max="5"
              placeholder="Rating 1-5"
              value={ratings[i]}
              onChange={(e) => {
                const newRatings = [...ratings];
                newRatings[i] = Number(e.target.value);
                setRatings(newRatings);
              }}
            />
            <textarea
              placeholder="Comment"
              value={comments[i]}
              onChange={(e) => {
                const newComments = [...comments];
                newComments[i] = e.target.value;
                setComments(newComments);
              }}
            />
          </div>
        ))}
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
