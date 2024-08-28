import visaImg from '../images/visa.png';
import masterImg from '../images/master.png';

import React from 'react';

const CreditCard = (props) => {
  let image;
  const style = {
    backgroundColor: props.bgColor,
    color: props.color
  }
  switch (props.type) {
    case 'Visa':
      image = visaImg;
      break;
    case 'Master Card':
      image = masterImg;
      break;
  }
  return (
    <div className="cards" style = {style}>
      <img src={image} alt="" />
      <p className='number'>•••• •••• •••• {props.number.slice(-4)}</p>
      <div className='info'>
        <p>
          Expires {props.expirationMonth}/{props.expirationYear.toString().slice(-2)}
        </p>
        <p>{props.bank}</p>
      </div>
      <p>{props.owner}</p>
    </div>
  );
};

export default CreditCard;
