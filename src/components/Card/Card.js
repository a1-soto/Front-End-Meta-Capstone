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

      {/* NUEVO: wrapper con position:relative alrededor de la imagen,
          necesario para anclar el badge de precio con position:absolute
          respecto a la imagen (y no a toda la tarjeta) */}
      <div className="card-image-wrapper">
        <img
          src={image}
          alt={title}
          draggable={false}
        />

        {/* CAMBIADO: el precio se movió aquí desde .card-header — ahora
            es un badge superpuesto sobre la imagen, no texto junto al título */}
        <span className="card-price-badge">{price}</span>
      </div>

      <div className="card-content">

        <div className="card-header">
          <h3>{title}</h3>
          {/* ELIMINADO: <span>{price}</span> — ya no vive aquí */}
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