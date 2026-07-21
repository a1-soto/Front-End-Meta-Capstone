import { useLocation, Link } from 'react-router-dom';
import {
  MdCheckCircle,
  MdInfoOutline,
  MdOutlineMailOutline,
  MdAccessTime,
  MdMap,
  MdPeopleAlt,
  MdCelebration,
} from 'react-icons/md';
import './ConfirmedBooking.css';

function ConfirmedBooking() {
  const location = useLocation();
  const formData = location.state;
  const {
    name = 'Guest',
    date = '',
    time = '',
    guests = 1,
    occasion = '',
  } = formData || {};

  const formattedDate = date
    ? new Date(`${date}T00:00:00`).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    : 'Date not available';

  return (
    <section className="confirmed-booking">
      <div className="container">

        <div className="confirmation-header">
          <div className="confirmation-check">
            <MdCheckCircle aria-hidden="true" />
          </div>
          <h1>Reservation Confirmed!</h1>
          <p>Thank you for choosing Little Lemon. We look forward to seeing you soon!</p>
        </div>

        <div className="confirmation-grid">

          <div className="confirmation-card">
            <div className="confirmation-card-header">
              <h2>Your Table is Ready</h2>
            </div>

            <div className="confirmation-card-body">
              <div className="confirmation-detail">
                <span className="confirmation-label">Name</span>
                <span className="confirmation-value">{name}</span>
              </div>

              <div className="confirmation-detail">
                <span className="confirmation-label">Date &amp; Time</span>
                <span className="confirmation-value">
                  {formattedDate}{time ? ` at ${time}` : ''}
                </span>
              </div>

              <div className="confirmation-detail">
                <span className="confirmation-label">
                  <MdPeopleAlt aria-hidden="true" /> Number of Guests
                </span>
                <span className="confirmation-value">
                  {guests} {Number(guests) === 1 ? 'Guest' : 'Guests'}
                </span>
              </div>

              <div className="confirmation-detail">
                <span className="confirmation-label">
                  <MdCelebration aria-hidden="true" /> Occasion
                </span>
                <span className="confirmation-value">{occasion || 'None'}</span>
              </div>

              <div className="confirmation-actions">
                <Link to="/menu" className="confirmation-btn confirmation-btn--primary">
                  View Menu
                </Link>
                <Link
                  to="/reservations"
                  state={{ tab: 'mybookings' }}
                  className="confirmation-btn confirmation-btn--secondary"
                >
                  View My Bookings
                </Link>
                <Link to="/" className="confirmation-btn confirmation-btn--secondary">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>

          <div className="confirmation-next-steps">
            <h2>
              <MdInfoOutline aria-hidden="true" /> What's Next?
            </h2>
            <ul>
              <li>
                <MdOutlineMailOutline aria-hidden="true" />
                <span>
                  A confirmation email has been sent to your inbox. Check your
                  spam folder if it doesn't arrive within 5 minutes.
                </span>
              </li>
              <li>
                <MdAccessTime aria-hidden="true" />
                <span>
                  Please arrive 10 minutes before your reservation. We hold
                  tables for a maximum of 15 minutes.
                </span>
              </li>
              <li>
                <MdMap aria-hidden="true" />
                <span>
                  We are located in the heart of the Historic District. Valet
                  parking is available at the entrance.
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div className="confirmation-location-banner">
          <div className="confirmation-location-text">
            <h2>Find Us Easily</h2>
            <p>123 Mediterranean Way, Chicago, IL</p>
            <p>Need to change your plans? Call us at (555) 123-4567.</p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="confirmation-btn confirmation-btn--primary"
            >
              Get Directions
            </a>
          </div>

          <div
            className="confirmation-map-placeholder"
            role="img"
            aria-label="Map showing Little Lemon's location"
          />
        </div>

      </div>
    </section>
  );
}

export default ConfirmedBooking;