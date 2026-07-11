import "./Card.css";

import { MdDeliveryDining } from "react-icons/md";
import { forwardRef } from "react";


const Card = forwardRef(function Card(
  { image, title, price, description },
  ref
) {

  return (
    <article
      className="card"
      ref={ref}
    >

      <img
        src={image}
        alt={title}
      />

      <div className="card-content">

        <div className="card-header">
          <h3>{title}</h3>
          <span>{price}</span>
        </div>

        <p>{description}</p>

        <button className="order-button">
          <span>Order a delivery</span>
          <MdDeliveryDining className="delivery-icon" />
        </button>

      </div>

    </article>
  );
});


export default Card;