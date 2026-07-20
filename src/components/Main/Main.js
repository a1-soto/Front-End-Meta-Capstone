import "./Main.css";
import Homepage from "../Homepage/Homepage";
import BookingPage from "../BookingPage/BookingPage";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function Main() {

  const [availableTimes] = useState([
  // Lunch
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",

  // Dinner
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
]);


  return (
    <main>
      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/reservations"
         element={<BookingPage availableTimes={availableTimes} />} />

      </Routes>
    </main>
  );
}