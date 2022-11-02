import React from "react";
import fabicon from "../images/favicon-32x32.png";

const Card = ({ cardDates }) => {
  console.log(cardDates.name);

  const fabicon = "../images/favicon-32x32.png";
  return (
    <div>
      <div className="intem">
        <div className="card--container">
          <div className="front--card">
            <figure>
              <img src="{fabicon}" alt="avatar" className="avatar" />
            </figure>
            <div className="card--date">
              <div className="number">
                <h2 className="number--card">{cardDates.number}</h2>
              </div>
              <div className="name--date">
                <h4 className="card--name">{cardDates.name}</h4>
                <p>
                  <span className="date--m">{cardDates.dateM}</span>{" "}
                  <span>/</span>
                  <span className="date--y">{cardDates.dateY}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="back--card">
            <h4 className="code">{cardDates.cvc}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
