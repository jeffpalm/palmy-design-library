import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Button } from './Button';
import { theme } from '../../theme';
import { ThemeProvider } from 'styled-components';

it('Button onClick function fires when clicked', () => {
  const testFunction = jest.fn(() => 'clicked');

  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <Button onClick={testFunction} label='Testing' />
    </ThemeProvider>
  );

  const renderedBtn = getByTestId('button');

  fireEvent.click(renderedBtn);

  expect(testFunction).toHaveBeenCalled();
});

it('Button onClick function not fired when disabled prop is true', () => {
  const testFunction = jest.fn(() => 'clicked');

  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <Button onClick={testFunction} label='Testing' disabled />
    </ThemeProvider>
  );

  const renderedBtn = getByTestId('button');

  fireEvent.click(renderedBtn);

  expect(testFunction).not.toHaveBeenCalled();
});
