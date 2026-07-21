import { useState, useEffect } from 'react';
import { getBookings } from '../../utils/bookingStorage';
import './MyBookings.css';

function MyBookings() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        setBookings(getBookings());
    }, []);

    if (bookings.length === 0) {
        return (
            <div className="my-bookings-empty">
                <p>You don't have any bookings yet on this device.</p>
            </div>
        );
    }

    return (
        <div className="my-bookings-list">
            <p className="my-bookings-note">
                Showing reservations saved on this browser. This isn't tied to an account —
                clearing your browser data will remove this list.
            </p>

            {[...bookings].reverse().map((b) => (
                <div className="booking-card" key={b.id}>
                    <div className="booking-card-header">
                        <span className="booking-card-name">{b.name}</span>
                        <span className="booking-card-guests">
                            {b.guests} guest{b.guests > 1 ? 's' : ''}
                        </span>
                    </div>
                    <p className="booking-card-detail">{b.date} · {b.time}</p>
                    {b.occasion && <p className="booking-card-detail">Occasion: {b.occasion}</p>}
                    {b.seating && (
                        <p className="booking-card-detail">
                            Seating: {b.seating === 'indoor' ? 'Indoor Dining Room' : 'Outdoor Garden Terrace'}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
}

export default MyBookings;