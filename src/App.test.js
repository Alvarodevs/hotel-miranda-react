import { render, screen } from '@testing-library/react';
import App from './App';

test('App contains dashboard title', () => {
  render(<App />);
  const dashboard = screen.getByText('Dashboard');
  expect(dashboard).toBeInTheDocument();
});
