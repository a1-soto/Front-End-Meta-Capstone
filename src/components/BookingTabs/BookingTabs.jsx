import './BookingTabs.css';

function BookingTabs({ activeTab, onTabChange, bookingCount }) {
  return (
    <div className="booking-tabs" role="tablist" aria-label="Reservation views">

      <button
        type="button"
        className={`booking-tab ${activeTab === 'book' ? 'booking-tab--active' : ''}`}
        role="tab"
        aria-selected={activeTab === 'book'}
        onClick={() => onTabChange('book')}
      >
        Book a Table
      </button>

      <button
        type="button"
        className={`booking-tab booking-tab--with-badge ${activeTab === 'mybookings' ? 'booking-tab--active' : ''}`}
        role="tab"
        aria-selected={activeTab === 'mybookings'}
        onClick={() => onTabChange('mybookings')}
      >
        My Bookings
        {bookingCount > 0 && (
          <span className="booking-count-badge" aria-label={`${bookingCount} bookings saved`}>
            {bookingCount}
          </span>
        )}
      </button>

    </div>
  );
}

export default BookingTabs;