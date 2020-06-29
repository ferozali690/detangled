import React from "react";
import "./card.css";

const Card = ({ start, end, title }) => {
  return (
    <div className="card-container">
      <div className="card-list-container">
        <li className="list-align">Title :{title}</li>
        <li className="list-align">Start-Date :{start}</li>
        <li className="list-align">End Date :{end}</li>
      </div>
    </div>
  );
};

export default Card;
