import React from 'react';
import { screen, render } from '@testing-library/react';
import App from './App';

test('renders app title', () => {
  render(<App />);
  expect(screen.getByText('Les Argonautes')).toBeInTheDocument();
});

test('renders button to add a wilder title', () => {
  render(<App />);
  expect(screen.getByRole('button')).toBeInTheDocument();
});
