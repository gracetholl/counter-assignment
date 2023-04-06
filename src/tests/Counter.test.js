import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initialCount = screen.getByTestId('count');
  expect(initialCount).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const initialCount = screen.getByTestId('count').textContent;
  userEvent.click(screen.getByText('+'));
  const updatedCount = screen.getByTestId('count').textContent;
  expect(updatedCount).toBe(String(Number(initialCount) + 1));
});

test('clicking - decrements the count', () => {
  const initialCount = screen.getByTestId('count').textContent;
  userEvent.click(screen.getByText('-'));
  const updatedCount = screen.getByTestId('count').textContent;
  expect(updatedCount).toBe(String(Number(initialCount) - 1));
});
