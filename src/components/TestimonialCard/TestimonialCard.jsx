import "./TestimonialCard.css";

export default function TestimonialCard({
  image,
  rating,
  review,
  name,
}) {
  return (
    <article className="testimonial-card">

      <div className="testimonial-rating">
        {"★".repeat(rating)}
      </div>

      <div className="testimonial-author">

        <img
          src={image}
          alt={name}
          className="testimonial-avatar"
        />

        <h3 className="testimonial-name">
          {name}
        </h3>

      </div>

      <p className="testimonial-review">
        "{review}"
      </p>

    </article>
  );
}