import React from 'react';
import { GenericButton } from '../GenericButton';
import './IntroCard.css';

let title = "Software Engineer";
let body = "I am a Los Angeles-based programmer with a passion for technology";

const IntroCard = (props, onClick) => {
  return (
    <div className="main">
      <div className="cardContent">
        <div className="cardTitle">
          <h1>{title}</h1>
        </div>

        <div className="cardDescription">
          <p>{body}</p>
        </div>

        <div className="btn">
          <GenericButton
            text="Contact Me"
            onClick={console.log("IntroCard contact clicked")}
          />
        </div>
      </div>
    </div>
  );
};

export default IntroCard;
