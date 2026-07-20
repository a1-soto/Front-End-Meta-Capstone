import Homepage from "../Homepage/Homepage";
import BookingPage from "../BookingPage/BookingPage";

import { Routes, Route } from "react-router-dom";
import { useReducer } from "react";
import { fetchAPI } from "../../Api/BookingAPI";

function initializeTimes() {
  return fetchAPI(new Date());
}

function updateTimes(state, action) {
  if (action.type === "date_changed") {
    return fetchAPI(new Date(action.date));
  }
  return state;
}

export default function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/reservations"
          element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}
        />
      </Routes>
    </main>
  );
}