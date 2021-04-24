import React from 'react';
import './GenericButton.css';

export const GenericButton = (props, onClick) => {
  return (
    <div className= "pressContainer">
      <button className= "buttonstyle" onClick={props.onClick}>{props.text}</button>
    </div>
  );
};

export default GenericButton;
