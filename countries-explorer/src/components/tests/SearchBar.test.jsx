import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';

describe('SearchBar Component', () => {
  test('renders input and updates value on change', () => {
    const setSearchTerm = jest.fn();

    render(
      <SearchBar searchTerm="" setSearchTerm={setSearchTerm} />
    );

    // Check if input is rendered
    const input = screen.getByPlaceholderText(/search by country name/i);
    expect(input).toBeInTheDocument();

    // Simulate typing
    fireEvent.change(input, { target: { value: 'India' } });
    expect(setSearchTerm).toHaveBeenCalledWith('India');
  });
});
