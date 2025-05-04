import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../Login';
import { BrowserRouter } from 'react-router-dom';

Object.defineProperty(window, 'localStorage', {
  value: { setItem: jest.fn(), getItem: jest.fn(() => null) },
  writable: true,
});

test('shows error on invalid login', () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );

  fireEvent.change(screen.getByPlaceholderText(/enter email/i), {
    target: { value: 'wrong@mail.com' },
  });
  fireEvent.change(screen.getByPlaceholderText(/enter password/i), {
    target: { value: 'wrongpass' },
  });

  fireEvent.click(screen.getByRole('button', { name: /login/i }));
  expect(screen.getByText(/Invalid email or password/i)).toBeInTheDocument();
});