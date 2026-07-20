// BookingForm.js
import React, { useState } from 'react';
import './BookingForm.css';

function BookingForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  return (
    <form className="booking-form" aria-labelledby="booking-form-heading">

      <h2 id="booking-form-heading">Book Your Experience</h2>
      <p className="booking-form-subtitle">
        Please fill in the details below to secure your table.
      </p>

      <div className="form-field">
        <label htmlFor="res-name">Full Name</label>
        <input
          type="text"
          id="res-name"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-field">
        <label htmlFor="res-email">Email Address</label>
        <input
          type="email"
          id="res-email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-field">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="form-field">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          <option value="" disabled>Select a time</option>
          {availableTimes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="res-guests">Number of guests</label>
        <input
          type="number"
          id="res-guests"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
        />
      </div>

      <div className="form-field">
        <label htmlFor="res-occasion">Occasion (optional)</label>
        <select
          id="res-occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="">None</option>
          <option value="Birthday">Birthday</option>
          <option value="Engagement">Engagement</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>

      <input
        type="submit"
        value="Reserve a Table"
        className="booking-submit-btn"
      />

    </form>
  );
}

export default BookingForm;