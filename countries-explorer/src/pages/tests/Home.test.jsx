import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Home from '../Home';
import * as countryService from '../../api/countryService';

jest.mock('../../api/countryService');

test('renders and filters country list', async () => {
  countryService.getAllCountries.mockResolvedValueOnce({
    data: [
      {
        cca3: 'LK',
        name: { common: 'Sri Lanka', official: 'Democratic Socialist Republic of Sri Lanka' },
        population: 22000000,
        region: 'Asia',
        capital: ['Colombo'],
        flags: { png: 'https://flagcdn.com/w320/lk.png' },
        languages: { sin: 'Sinhala' },
      },
    ],
  });

  render(<Home />);

  expect(await screen.findByText('Sri Lanka')).toBeInTheDocument();
  expect(screen.getByText(/Asia/)).toBeInTheDocument();
});
