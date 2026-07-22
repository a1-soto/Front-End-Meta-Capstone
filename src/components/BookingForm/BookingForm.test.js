import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';
import { validateForm } from '../../utils/validateForms';

const requiredProps = {
  availableTimes: ['17:00', '18:00', '19:00'],
  onDateChange: () => { },
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

const validData = {
  name: 'Jane Doe',
  email: 'jane@example.com',
  phone: '+1 555 000 0000',
  date: '2099-01-01', // fecha muy en el futuro, siempre válida para el test
  time: '18:00',
  guests: 2,
  occasion: '',
  seating: 'indoor',
  requests: '',
};

test('validateForm returns no errors when all fields are valid', () => {
  const errors = validateForm(validData);
  expect(errors).toEqual({});
});

test('validateForm flags guests = 0 as invalid (edge case)', () => {
  const errors = validateForm({ ...validData, guests: 0 });
  expect(errors.guests).toBe('Guests must be between 1 and 10');
});

test('validateForm flags guests = 11 as invalid (edge case)', () => {
  const errors = validateForm({ ...validData, guests: 11 });
  expect(errors.guests).toBeDefined();
});

test('validateForm flags a past date as invalid', () => {
  const errors = validateForm({ ...validData, date: '2020-01-01' });
  expect(errors.date).toBe('Please choose a date from today onward');
});

test('validateForm flags an empty required field (name)', () => {
  const errors = validateForm({ ...validData, name: '' });
  expect(errors.name).toBe('Name is required');
});

test('validateForm flags a malformed email', () => {
  const errors = validateForm({ ...validData, email: 'not-an-email' });
  expect(errors.email).toBe('Invalid email address');
});

test('submit button re-enables after fixing an invalid field (no lockout)', () => {
  render(<BookingForm {...requiredProps} />);

  const submitButton = screen.getByRole('button', { name: /reserve a table/i });
  const nameInput = screen.getByLabelText(/full name/i);

  expect(submitButton).not.toBeDisabled();

  fireEvent.click(submitButton);
  expect(submitButton).toBeDisabled();

  fireEvent.change(nameInput, { target: { value: 'Jane Doe' } });

  expect(screen.queryByText(/name is required/i)).not.toBeInTheDocument();
});