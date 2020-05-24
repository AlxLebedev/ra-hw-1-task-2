import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders add to cart button', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/add to cart/i);
  expect(linkElement).toBeInTheDocument();
});
