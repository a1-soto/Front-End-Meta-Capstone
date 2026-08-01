import { useState, useEffect } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';
import BookingTabs from '../BookingTabs/BookingTabs';
import BookingForm from '../BookingForm/BookingForm';
import MyBookings from '../MyBookings/MyBookings';
import { submitAPI } from '../../Api/BookingAPI';
import { saveBooking, getBookings } from '../../utils/bookingStorage';
import './BookingPage.css';
import restaurant1 from "../../assets/images/restaurant-view.jpg";

const heroImage = restaurant1;

function BookingPage({ availableTimes, dispatch }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('book');

  useEffect(() => {
    if (location.state?.tab) {
      setActiveTab(location.state.tab);
      navigate(location.pathname, { replace: true, state: {} }); // limpia el state del historial
    }
   // Empty deps on purpose: this effect should run ONLY on mount (read the
    // "tab" that came from ConfirmedBooking a single time). If we added
    // location/navigate as dependencies, the effect would re-run every time
    // it calls navigate(...) itself, creating an unnecessary loop. Same
    // reasoning already documented in useGsapMatchMedia.js.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


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

  const bookingCount = getBookings().length;

  return (
    <section className="booking-page">
      <div className="booking-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="booking-hero-overlay">
          <h1>Reservations</h1>
          <p>Experience authentic Mediterranean hospitality at Little Lemon Chicago.</p>
        </div>
      </div>

      <BookingTabs activeTab={activeTab} onTabChange={setActiveTab} bookingCount={bookingCount} />

      <div className="container">
        {activeTab === 'book' ? (
          <BookingForm
            availableTimes={availableTimes}
            onDateChange={handleDateChange}
            onSubmitReservation={handleSubmit}
          />
        ) : (
          <MyBookings />
        )}
      </div>

    </section>
  );
}

export default BookingPage;