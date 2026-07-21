const STORAGE_KEY = 'littleLemon_bookings';

export function getBookings() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveBooking(booking) {
  const bookings = getBookings();
  const withId = { ...booking, id: Date.now() };
  bookings.push(withId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
}