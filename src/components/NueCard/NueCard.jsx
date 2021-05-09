import React from 'react';
import './NueCard.css';

const NeuCard = () => {
  return (
    <div className="mainBox">
      <div className="container">
        <div className="card">
          <div className="box">
            <div className="content">
              {/* <h2>GR.</h2> */}
              <h3>Card One</h3>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.";
              </p>
              <a> read more </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuCard;
