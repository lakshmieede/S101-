import React from "react";

const Dashboard = ({ title, stats }) => (
  <div className="container">
    <h2>{title}</h2>
    <ul>
      {stats.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default Dashboard;
