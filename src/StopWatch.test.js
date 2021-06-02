import { render, screen, fireEvent, within } from '@testing-library/react';
import StopWatch from './App';

test('renders title', () => {
  render(<StopWatch />);
  const title = screen.getByText(/StopWatch/i);
  expect(title).toBeInTheDocument();
});

test('renders action buttons', () => {
  render(<StopWatch />);
  const startButton = screen.getByRole("button", {
    name: "START",
  });
  const stopButton = screen.getByRole("button", {
    name: "STOP",
  });
  const lapButton = screen.getByRole("button", {
    name: "LAP",
  });
  const resetButton = screen.getByRole("button", {
    name: "RESET",
  });
  expect(startButton).toBeInTheDocument();
  expect(startButton).not.toHaveAttribute('disabled');
  expect(stopButton).toBeInTheDocument();
  expect(stopButton).toHaveAttribute('disabled');
  expect(lapButton).toBeInTheDocument();
  expect(lapButton).toHaveAttribute('disabled');
  expect(resetButton).toBeInTheDocument();
  expect(resetButton).toHaveAttribute('disabled');
});

test('check action buttons working', () => {
  render(<StopWatch />);
  const startButton = screen.getByRole("button", {
    name: "START",
  });
  const stopButton = screen.getByRole("button", {
    name: "STOP",
  });
  const lapButton = screen.getByRole("button", {
    name: "LAP",
  });
  const resetButton = screen.getByRole("button", {
    name: "RESET",
  });
  fireEvent.click(startButton);
  expect(startButton).toHaveAttribute('disabled');
  expect(stopButton).not.toHaveAttribute('disabled');
  expect(lapButton).not.toHaveAttribute('disabled');
  expect(resetButton).not.toHaveAttribute('disabled');

  fireEvent.click(stopButton);
  expect(startButton).not.toHaveAttribute('disabled');
  expect(stopButton).toHaveAttribute('disabled');
  expect(lapButton).toHaveAttribute('disabled');
  expect(resetButton).not.toHaveAttribute('disabled');

  fireEvent.click(startButton);
  fireEvent.click(resetButton);
  expect(startButton).not.toHaveAttribute('disabled');
  expect(stopButton).toHaveAttribute('disabled');
  expect(lapButton).toHaveAttribute('disabled');
  expect(resetButton).toHaveAttribute('disabled');
});

test('check lap button', () => {
  render(<StopWatch />);
  const startButton = screen.getByRole("button", {
    name: "START",
  });
  const lapButton = screen.getByRole("button", {
    name: "LAP",
  });
  const resetButton = screen.getByRole("button", {
    name: "RESET",
  });
  
  expect(screen.queryByRole("list")).not.toBeInTheDocument()
  fireEvent.click(startButton);
  expect(screen.queryByRole("list")).not.toBeInTheDocument()

  fireEvent.click(lapButton);
  fireEvent.click(lapButton);
  fireEvent.click(lapButton);
  expect(screen.getByRole("list")).not.toBeEmpty();
  expect(screen.getAllByRole("listitem")).toHaveLength(3);

  fireEvent.click(resetButton);
  expect(screen.queryByRole("list")).not.toBeInTheDocument()
});

test('check lap list items', async () => {
  render(<StopWatch />);
  const startButton = screen.getByRole("button", {
    name: "START",
  });
  const lapButton = screen.getByRole("button", {
    name: "LAP",
  });
  const resetButton = screen.getByRole("button", {
    name: "RESET",
  });

  fireEvent.click(startButton);
  await new Promise((r) => setTimeout(r, 2100));
  fireEvent.click(lapButton);
  await new Promise((r) => setTimeout(r, 2100));
  fireEvent.click(lapButton);
  const listItems = screen.getAllByRole("listitem");
  expect(listItems[0]).toHaveTextContent(/00:00:04/i);
  expect(listItems[1]).toHaveTextContent(/00:00:02/i);
});