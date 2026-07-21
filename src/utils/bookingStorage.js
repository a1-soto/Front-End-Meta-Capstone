// bookingStorage.js
// Utilidad para guardar/leer reservas en localStorage (memoria de este navegador, sin backend)
const STORAGE_KEY = 'littleLemon_bookings';

// Lee todas las reservas guardadas. Si no hay ninguna o hay un error de parseo, retorna array vacío.
export function getBookings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

// Agrega una nueva reserva al historial (no reemplaza las anteriores)
export function saveBooking(booking) {
  const bookings = getBookings();
  const withId = { ...booking, id: Date.now() };
  bookings.push(withId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
}