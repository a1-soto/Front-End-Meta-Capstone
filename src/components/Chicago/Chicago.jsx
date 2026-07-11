import "./Chicago.css";

import restaurant1 from "../../assets/images/restaurant-view.jpg";
import restaurant2 from "../../assets/images/restaurant.jpg";

export default function Chicago() {

  const values = [
    {
      title: "Fresh ingredients",
      text: "Carefully selected products inspired by Mediterranean cuisine."
    },
    {
      title: "Family tradition",
      text: "Classic recipes combined with the warmth of sharing a table."
    },
    {
      title: "Modern experience",
      text: "A contemporary approach to timeless Mediterranean flavors."
    }
  ];

  return (
    <section className="chicago">
      <div className="container chicago-container">
        <div className="chicago-images">
          <img
            src={restaurant1}
            alt="Little Lemon restaurant interior"
            className="chicago-image chicago-image-main"
          />

          <img
            src={restaurant2}
            alt="Little Lemon restaurant dining area"
            className="chicago-image chicago-image-secondary"
          />
        </div>
        <div className="chicago-content">
          <p className="section-label">
            ABOUT LITTLE LEMON
          </p>
          <h2>
            Mediterranean roots, Modern experience.
          </h2>
          <p className="chicago-description">
            We bring Mediterranean cuisine to life through fresh ingredients,
            authentic recipes, and a welcoming atmosphere.
          </p>
          <p className="chicago-description">
            Our goal is simple: create a place where great food and great
            conversations come together.
          </p>

          <div className="chicago-values">
            {values.map((value) => (
              <article
                key={value.title}
                className="chicago-value"
              >
                <h3>
                  {value.title}
                </h3>
                <p>
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}