import "./Card.css";

import { MdDeliveryDining } from "react-icons/md";

export default function Card({ image, title, price, description }) {
  return (
    <article className="card">
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
}