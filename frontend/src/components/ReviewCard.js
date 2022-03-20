
import React from "react";
import '../Pages/ProductDetails.css';


const ReviewCard = ({ review }) => {
  const options = {
    value: review.rating,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <div className="reviewCard">
      <img src='' alt="User" />
      <p>{review.name}</p>
    
      <span className="reviewCardComment">{review.comment}</span>
    </div>
  );
};

export default ReviewCard;
