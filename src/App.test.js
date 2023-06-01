import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a div with a specific class', () => {
  render(<App />);
  const divElement = screen.getByTestId('specific-div');
  expect(divElement).toBeInTheDocument();
});