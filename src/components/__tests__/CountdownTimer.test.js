import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import {render, screen} from '@testing-library/react'
import CountdownTimer from "../CountdownTimer/CountdownTimer";

test('CountdownTimer Should display seconds only when advertisedStart is current time', () => {
   render(<CountdownTimer advertisedStart={new Date()} />)
  expect(screen.getByTestId('countdown-display')).toHaveTextContent('-1s')
})

test('CountdownTimer Should display hours & mins when advertisedStart is hours apart from current time', () => {
  const date = new Date();
  date.setHours(date.getHours() + 1);
  date.setMinutes(date.getMinutes() + 10);
  date.setSeconds(date.getSeconds() + 10);
  render(<CountdownTimer advertisedStart={date} />)
  expect(screen.getByTestId('countdown-display')).toHaveTextContent('1h 10m 9s')
})

test('CountdownTimer Should display mins when advertisedStart is minutes apart from current time', () => {
  const date = new Date();
  date.setMinutes(date.getMinutes() + 10);
  date.setSeconds(date.getSeconds() + 10);
  render(<CountdownTimer advertisedStart={date} />)
  expect(screen.getByTestId('countdown-display')).toHaveTextContent('10m 9s')
})