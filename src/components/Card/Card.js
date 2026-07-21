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
      data-animate="true"
    >

      <div className="card-image-wrapper">
        <img
          src={image}
          alt={title}
          draggable={false}
        />

        <span className="card-price-badge">{price}</span>
      </div>

      <div className="card-content">

        <div className="card-header">
          <h3>{title}</h3>
             </div>

        <p>{description}</p>

        <button className="order-button" disabled aria-disabled="true">
          <span>Order a delivery</span>
          <MdDeliveryDining className="delivery-icon" aria-hidden="true" />
        </button>

      </div>

    </article>
  );
});


export default Card;