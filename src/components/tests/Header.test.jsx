import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../../utils/auth', () => ({
  getLoggedInUser: () => 'TestUser',
  logout: jest.fn(),
}));

test('renders Header with user and logout button', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  expect(screen.getByText(/Hello, TestUser/i)).toBeInTheDocument();
  expect(screen.getByText(/Logout/i)).toBeInTheDocument();
  // Don't test for Login if user is logged in
  // expect(screen.getByRole('button', { name: /Login/i })).toBeInTheDocument();
});
