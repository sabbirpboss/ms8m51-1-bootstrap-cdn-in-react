import React from "react";

const Card = ({ product }) => {
  const { name, price, img, info } = product;
  return (
    <div className="card me-2 border border-info rounded">
      <img
        src={img}
        className="card-img-top rounded mx-auto m-1"
        style={{ height: "150px", width: "214px"}}
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p><small className="fw-light">Price: ${price}</small></p>
        <p className="card-text">{info}</p>
      </div>
      <div className="card-footer bg-info">
        <span className="fw-bolder text-white">Buy Now</span>
      </div>
    </div>
  );
};

export default Card;
