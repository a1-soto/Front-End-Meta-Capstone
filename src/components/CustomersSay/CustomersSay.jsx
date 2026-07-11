import "./CustomersSay.css";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

import customer1 from "../../assets/images/customer-01.jpg";
import customer2 from "../../assets/images/customer-02.jpg";
import customer3 from "../../assets/images/customer-03.jpg";
import customer4 from "../../assets/images/customer-04.jpg";
import customer5 from "../../assets/images/customer-05.jpg";
import customer6 from "../../assets/images/customer-06.jpg";

export default function CustomersSay() {
  const testimonials = [
    {
      id: 1,
      image: customer1,
      rating: 5,
      name: "Emma Carter",
      review:
        "Everything exceeded our expectations. Fresh ingredients, beautiful presentation, and exceptional service. We'll definitely be back.",
    },
    {
      id: 2,
      image: customer2,
      rating: 5,
      name: "Marcus Williams",
      review:
        "The grilled sea bass was outstanding and the staff made us feel welcome from the moment we arrived. Highly recommended.",
    },
    {
      id: 3,
      image: customer3,
      rating: 4,
      name: "Omar Hassan",
      review:
        "One of the best Mediterranean restaurants in Chicago. Every dish was full of flavor and beautifully prepared.",
    },
    {
      id: 4,
      image: customer4,
      rating: 5,
      name: "Sofia Martinez",
      review:
        "Warm atmosphere, amazing food and wonderful attention to detail. It was the perfect place for a family dinner.",
    },
    {
      id: 5,
      image: customer5,
      rating: 5,
      name: "Daniel Brooks",
      review:
        "The homemade desserts were incredible and the service was friendly without being intrusive. We'll be returning very soon.",
    },
    {
      id: 6,
      image: customer6,
      rating: 4,
      name: "Grace Chen",
      review:
        "Little Lemon offers an authentic Mediterranean experience with modern touches. Every visit has been consistently excellent.",
    },
  ];

  return (
    <section className="customers-say">
      <div className="container">
        <div className="customers-say-header">
          <h2>Table conversations</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              image={testimonial.image}
              rating={testimonial.rating}
              review={testimonial.review}
              name={testimonial.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}