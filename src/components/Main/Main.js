import "./Main.css";
import Homepage from "../Homepage/Homepage";
import BookingPage from "../BookingPage/BookingPage";

import { Routes, Route } from "react-router-dom";

export default function Main() {
  return (
    <main>
      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/reservations" element={<BookingPage />} />

      </Routes>
    </main>
  );
}