import React from "react";

const Card = (props) => {
  return (
    <div className="card bg-primary text-white">
      <div class="card-header text-center fs-4 py-3">Our best meals</div>
      {props.children}
    </div>
  );
};

export default Card;
