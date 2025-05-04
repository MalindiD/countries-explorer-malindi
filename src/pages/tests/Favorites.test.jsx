import React from 'react';
import { render, screen } from '@testing-library/react';
import Favorites from '../Favorites';
import { act } from 'react-dom/test-utils';

test('shows message when no favorites', () => {
  const mockLocalStorage = {
    getItem: jest.fn(() => '[]'),
    setItem: jest.fn()
  };

  Object.defineProperty(window, 'localStorage', {
    value: mockLocalStorage,
    writable: true
  });

  act(() => {
    render(<Favorites />);
  });

  expect(screen.getByText(/You have no favorites yet/i)).toBeInTheDocument();
});
