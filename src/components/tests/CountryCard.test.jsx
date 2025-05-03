import React from 'react';
import { render, screen } from '@testing-library/react';
import CountryCard from '../CountryCard';

const mockCountry = {
  name: { common: 'Sri Lanka' },
  population: 22000000,
  region: 'Asia',
  capital: ['Colombo'],
  flags: { png: 'https://flagcdn.com/w320/lk.png' },
  languages: { sin: 'Sinhala', tam: 'Tamil' },
};

test('renders country card with correct info', () => {
  render(<CountryCard country={mockCountry} onClick={() => {}} />);
  expect(screen.getByText('Sri Lanka')).toBeInTheDocument();
  expect(screen.getByText(/Population/i)).toBeInTheDocument();
  expect(screen.getByText(/22,000,000/)).toBeInTheDocument();
  expect(screen.getByText(/Region/i)).toBeInTheDocument();
  expect(screen.getByText('Asia')).toBeInTheDocument();
  expect(screen.getByText(/Capital/i)).toBeInTheDocument();
  expect(screen.getByText('Colombo')).toBeInTheDocument();
  expect(screen.getByText(/Sinhala, Tamil/)).toBeInTheDocument();
});
