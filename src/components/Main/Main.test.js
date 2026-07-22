import { initializeTimes, updateTimes } from './Main';

test('initializeTimes returns a non-empty array of time slots', () => {
  const times = initializeTimes();

  expect(Array.isArray(times)).toBe(true);
  expect(times.length).toBeGreaterThan(0);
});

test('updateTimes returns a new array of times when the date changes', () => {
  const initialState = ['17:00'];
  const action = { type: 'date_changed', date: '2026-08-01' };

  const result = updateTimes(initialState, action);

  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
});

test('updateTimes returns the same state for an unrecognized action type', () => {
  const state = ['17:00', '18:00'];
  const action = { type: 'unknown_action' };

  const result = updateTimes(state, action);

  expect(result).toEqual(state);
});