import React from 'react';
import { connect } from 'react-redux';

function rand(min, max) {
  let randomNum = Math.random() * (max - min) + min;
  return Math.floor(randomNum);
}

const ConfirmationPage = (props) => {
  return (
    <div>
      <h1>Thank you for your order!</h1>
      <h3>Your confirmation is #{rand(100000, 120000)}</h3>
    </div>
  );
};

export default ConfirmationPage;
