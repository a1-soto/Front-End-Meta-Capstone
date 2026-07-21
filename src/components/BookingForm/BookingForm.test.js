import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

const requiredProps = {
  availableTimes: ['17:00', '18:00', '19:00'],
  onDateChange: () => {},
  onSubmitReservation: () => true,
};

test('renders the BookingForm heading', () => {
  render(<BookingForm {...requiredProps} />);

  const heading = screen.getByRole('heading', { name: /book your experience/i });
  expect(heading).toBeInTheDocument();
});

test('renders the submit button', () => {
  render(<BookingForm {...requiredProps} />);

   const submitButton = screen.getByRole('button', { name: /reserve a table/i });
  expect(submitButton).toBeInTheDocument();
});

test('renders all available time options in the select', () => {
  render(<BookingForm {...requiredProps} />);

  requiredProps.availableTimes.forEach((time) => {
    expect(screen.getByRole('option', { name: time })).toBeInTheDocument();
  });
});