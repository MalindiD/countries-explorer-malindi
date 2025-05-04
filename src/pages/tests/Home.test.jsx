import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Home';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../../api/countryService', () => ({
  getAllCountries: jest.fn(() => Promise.resolve({ data: [] })),
  getCountryByName: jest.fn(() => Promise.resolve({ data: [] })),
  getCountriesByRegion: jest.fn(() => Promise.resolve({ data: [] })),
}));

test('renders Home and shows no countries found initially', async () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  expect(await screen.findByText(/No countries found/i)).toBeInTheDocument();
});