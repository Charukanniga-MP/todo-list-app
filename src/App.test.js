import { render, screen } from '@testing-library/react';
import App from './App';

test('shows To-Do List heading', () => {
  render(<App />);
  const title = screen.getByRole('heading', { name: /to-do list/i });
  expect(title).toBeInTheDocument();
});
