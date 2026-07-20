import BookingTabs from '../BookingTabs/BookingTabs';
import BookingForm from '../BookingForm/BookingForm';
import './BookingPage.css';

import restaurant1 from "../../assets/images/restaurant-view.jpg";

const heroImage = restaurant1;

function BookingPage({availableTimes}) {
  return (
    <section className="booking-page">
      <div
        className="booking-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="booking-hero-overlay">
          <h1>Reservations</h1>
          <p>Experience authentic Mediterranean hospitality at Little Lemon Chicago.</p>
        </div>
      </div>

      <BookingTabs />
      <BookingForm availableTimes={availableTimes} />

    </section>
  );
}

export default BookingPage;