import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Agri-Tech Hackathon', () => {
  render(<App />);
  const element = screen.getByText(/Agri-Tech/i);
  expect(element).toBeInTheDocument();
});
