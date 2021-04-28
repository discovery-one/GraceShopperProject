import React from 'react';

function rand(min, max) {
  let randomNum = Math.random() * (max - min) + min;
  return Math.floor(randomNum);
}

const ConfirmationPage = (props) => {
  return (
    <div className="confirmation-content">
      <h1>Thank you for your order!</h1>
      <h3>Your confirmation number is #{rand(100000, 120000)}</h3>
      <img
        className="confirmation-illustration"
        src={'/images/donut.png'}
        width="100%"
        alt="donut"
      />
    </div>
  );
};

export default ConfirmationPage;
