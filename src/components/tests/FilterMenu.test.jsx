import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FilterMenu from '../FilterMenu';

test('selects a region using react-select', async () => {
  const setSelectedRegion = jest.fn();
  const regionOptions = ['Asia', 'Europe', 'Africa'];

  render(
    <FilterMenu
      selectedRegion=""
      setSelectedRegion={setSelectedRegion}
      regionOptions={regionOptions}
    />
  );

  const select = screen.getByText('Filter by Region');
  userEvent.click(select);

  const asiaOption = await screen.findByText('Asia');
  userEvent.click(asiaOption);

  await waitFor(() => {
    expect(setSelectedRegion).toHaveBeenCalledWith('Asia');
  });
});
