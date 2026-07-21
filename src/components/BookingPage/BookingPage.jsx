import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingTabs from '../BookingTabs/BookingTabs';
import BookingForm from '../BookingForm/BookingForm';
import MyBookings from '../MyBookings/MyBookings';
import { submitAPI } from '../../Api/BookingAPI';
import { saveBooking } from '../../utils/bookingStorage';
import './BookingPage.css';
import restaurant1 from "../../assets/images/restaurant-view.jpg";

const heroImage = restaurant1;

function BookingPage({ availableTimes, dispatch }) {
  const navigate = useNavigate();
   const [activeTab, setActiveTab] = useState('book');

  function handleDateChange(date) {
    dispatch({ type: 'date_changed', date });
  }

  function handleSubmit(formData) {
    const success = submitAPI(formData);

    if (success) {
      saveBooking(formData); 
      navigate('/booking-confirmed', { state: formData });
    }

    return success;
  }

  return (
    <section className="booking-page">
      <div className="booking-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="booking-hero-overlay">
          <h1>Reservations</h1>
          <p>Experience authentic Mediterranean hospitality at Little Lemon Chicago.</p>
        </div>
      </div>

      <BookingTabs activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === 'book' ? (
        <BookingForm
          availableTimes={availableTimes}
          onDateChange={handleDateChange}
          onSubmitReservation={handleSubmit}
        />
      ) : (
        <MyBookings />
      )}
    </section>
  );
}

export default BookingPage;