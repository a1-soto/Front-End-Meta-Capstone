import { useState } from 'react';

import BookingTabs from '../BookingTabs/BookingTabs';
import BookingForm from '../BookingForm/BookingForm';

import { fetchAPI, submitAPI } from '../../Api/BookingAPI';

import './BookingPage.css';

import restaurant1 from "../../assets/images/restaurant-view.jpg";


const heroImage = restaurant1;


function BookingPage() {

  const [availableTimes, setAvailableTimes] = useState([]);


  function handleDateChange(date) {

    const selectedDate = new Date(date);

    const times = fetchAPI(selectedDate);

    setAvailableTimes(times);

  }


  function handleSubmit(formData) {

    const result = submitAPI(formData);

    return result;

  }


  return (
    <section className="booking-page">

      <div
        className="booking-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >

        <div className="booking-hero-overlay">

          <h1>Reservations</h1>

          <p>
            Experience authentic Mediterranean hospitality at Little Lemon Chicago.
          </p>

        </div>

      </div>


      <BookingTabs />


      <BookingForm
        availableTimes={availableTimes}
        onDateChange={handleDateChange}
        onSubmitReservation={handleSubmit}
      />


    </section>
  );
}


export default BookingPage;