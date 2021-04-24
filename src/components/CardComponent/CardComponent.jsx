import React from 'react';
import placeholder from '../../assets/318x180.svg';
import './CardComponent.css';

let image = placeholder;
let title = "Card Title";
let body =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const CardComponent = (props, onClick) => {
  return (
    <div className="main">
      <div className="imageContainer">
        <img src={image} alt="" />
      </div>

      <div className="cardContent">
        <div className="cardTitle">
          <h1>{title}</h1>
        </div>

        <div className="cardDescription">
          <p>{body}</p>
        </div>

        <div className="btn">
          <button onClick={console.log('clicked')}>
            <a>See Full Project</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
