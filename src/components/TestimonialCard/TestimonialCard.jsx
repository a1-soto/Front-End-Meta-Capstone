import "./TestimonialCard.css";
import { forwardRef } from "react";
// forwardRef permite que CustomersSay (el padre) le pase un ref a este
// componente, necesario para poder animarlo desde afuera

const TestimonialCard = forwardRef(function TestimonialCard(
  { image, rating, review, name },
  ref
) {
  return (
    <article
      className="testimonial-card"
      ref={ref}
      data-animate="true"
    >

      <div className="testimonial-rating" aria-label={`Rating: ${rating} out of 5`}>
        {"★".repeat(rating)}
      </div>

      <div className="testimonial-author">
        <img
          src={image}
          alt={name}
          className="testimonial-avatar"
        />
        <h3 className="testimonial-name">{name}</h3>
      </div>

      <p className="testimonial-review">"{review}"</p>

    </article>
  );
});

export default TestimonialCard;