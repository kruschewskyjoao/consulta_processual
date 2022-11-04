/* eslint-disable */
import React from 'react';
import renderWithRouter from './tests/helpers/renderWithRouter';
import App from './App';

test('front-end', () => {
  const { queryByText } = renderWithRouter(<App />);
  expect(queryByText(/test/i)).not.toBeInTheDocument();
});
