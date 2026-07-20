// BookingTabs.jsx
import './BookingTabs.css';

function BookingTabs() {
  return (
    <div className="booking-tabs" role="tablist" aria-label="Reservation views">

      <button
        type="button"
        className="booking-tab booking-tab--active"
        role="tab"
        aria-selected="true"
      >
        Book a Table
      </button>

      <button
        type="button"
        className="booking-tab booking-tab--disabled"
        role="tab"
        aria-selected="false"
        disabled
        aria-disabled="true"
        title="Próximamente — requiere cuenta de usuario"
      >
        My Bookings
        <span className="booking-tab-badge" aria-hidden="true">•</span>
      </button>

    </div>
  );
}

export default BookingTabs;