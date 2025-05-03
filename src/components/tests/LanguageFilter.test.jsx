import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LanguageFilter from '../LanguageFilter';

test('selects a language using react-select', async () => {
  const setSelectedLanguage = jest.fn();
  const languageOptions = ['English', 'Spanish', 'Tamil'];

  render(
    <LanguageFilter
      selectedLanguage=""
      setSelectedLanguage={setSelectedLanguage}
      languageOptions={languageOptions}
    />
  );

  const select = screen.getByText('Filter by Language');
  userEvent.click(select);

  const tamilOption = await screen.findByText('Tamil');
  userEvent.click(tamilOption);

  await waitFor(() => {
    expect(setSelectedLanguage).toHaveBeenCalledWith('Tamil');
  });
});
