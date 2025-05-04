import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CountryDetailModal from '../CountryDetailModal';

const countryMock = {
  name: { common: 'India', official: 'Republic of India' },
  population: 1393409038,
  region: 'Asia',
  capital: ['New Delhi'],
  languages: { hin: 'Hindi', eng: 'English' },
  flags: { png: 'https://flagcdn.com/in.png' },
  subregion: 'Southern Asia',
  timezones: ['UTC+5:30'],
};

test('renders modal with country details', () => {
  render(<CountryDetailModal country={countryMock} onClose={jest.fn()} />);
  expect(screen.getByText(/Republic of India/i)).toBeInTheDocument();
  expect(screen.getByText(/New Delhi/i)).toBeInTheDocument();
  expect(screen.getByText(/Southern Asia/i)).toBeInTheDocument();
});