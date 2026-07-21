import React, { useState } from 'react';
import './BookingForm.css';
import { MdCalendarToday, MdPerson, MdEmail, MdPhone, MdAccessTime, MdGroups, MdCelebration, MdLocationOn, MdOutlineMessage } from 'react-icons/md';

function BookingForm({ availableTimes, onDateChange, onSubmitReservation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [seating, setSeating] = useState('indoor');
  const [requests, setRequests] = useState('');
  const [submitError, setSubmitError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const formData = { name, email, phone, date, time, guests, occasion, seating, requests };

    const success = onSubmitReservation(formData);

    if (!success) {
      setSubmitError('We could not confirm your reservation. Please try again.');
    }
  }

  return (
    <form className="booking-form" aria-labelledby="booking-form-heading" onSubmit={handleSubmit}>
      <div className="booking-form-header">
        <MdCalendarToday className="booking-form-icon" aria-hidden="true" />
        <h2 id="booking-form-heading">Book Your Experience</h2>
        <p className="booking-form-subtitle">
          Please fill in the details below to secure your table.
        </p>
      </div>

      <div className="form-field form-field--full">
        <label htmlFor="res-name"><MdPerson aria-hidden="true" /> Full Name</label>
        <input
          type="text"
          id="res-name"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="booking-form-grid">

        <div className="form-field">
          <label htmlFor="res-email"><MdEmail aria-hidden="true" /> Email Address</label>
          <input
            type="email"
            id="res-email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="res-phone"><MdPhone aria-hidden="true" /> Phone Number</label>
          <input
            type="tel"
            id="res-phone"
            placeholder="+1 (555) 000-0000"
            value={phone}
            onChange={(e) => {
              const filtered = e.target.value.replace(/[^\d+\-()\s]/g, '');
              setPhone(filtered);
            }}
            pattern="^\+?[\d\s\-()]{7,}$"
            title="Enter a valid phone number (digits, spaces, +, -, and parentheses only)"
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="res-date"><MdCalendarToday aria-hidden="true" /> Date</label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={(e) => {
              const newDate = e.target.value;
              setDate(newDate);
              onDateChange(newDate);
            }}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="res-time"><MdAccessTime aria-hidden="true" /> Time</label>
          <select
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          >
            <option value="" disabled>Select a time</option>
            {availableTimes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="res-guests"><MdGroups aria-hidden="true" /> Number of Guests</label>
          <input
            type="number"
            id="res-guests"
            min="1"
            max="10"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="res-occasion"><MdCelebration aria-hidden="true" /> Occasion (optional)</label>
          <select
            id="res-occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option value="">None</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Engagement">Engagement</option>
            <option value="Business Dinner">Business Dinner</option>
          </select>
        </div>

      </div>

      <div className="form-field form-field--full">
        <label><MdLocationOn aria-hidden="true" /> Seating Preference</label>
        <div className="seating-options" role="radiogroup" aria-label="Seating preference">
          <label className="seating-option">
            <input
              type="radio"
              name="seating"
              value="indoor"
              checked={seating === 'indoor'}
              onChange={(e) => setSeating(e.target.value)}
            />
            Indoor Dining Room
          </label>
          <label className="seating-option">
            <input
              type="radio"
              name="seating"
              value="outdoor"
              checked={seating === 'outdoor'}
              onChange={(e) => setSeating(e.target.value)}
            />
            Outdoor Garden Terrace
          </label>
        </div>
      </div>

      <div className="form-field form-field--full">
        <label htmlFor="res-requests"><MdOutlineMessage aria-hidden="true" /> Special Requests</label>
        <textarea
          id="res-requests"
          placeholder="Any allergies, high chair requirements, or specific requests?"
          value={requests}
          onChange={(e) => setRequests(e.target.value)}
          rows={4}
        />
      </div>

      {submitError && (
        <p role="alert" className="booking-form-error">
          {submitError}
        </p>
      )}

      <input
        type="submit"
        value="Reserve a Table"
        className="booking-submit-btn"
      />

    </form>
  );
}

export default BookingForm;