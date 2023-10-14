import React from 'react';
import { render, screen } from '@testing-library/react';
import CardList from '../CardList';

const mockRobots = [
  { id: 1, name: 'Robot1', email: 'robot1@example.com' },
  { id: 2, name: 'Robot2', email: 'robot2@example.com' },
  { id: 3, name: 'Robot3', email: 'robot3@example.com' },
];

test('it renders a list of cards based on the robots prop', () => {
  render(<CardList robots={mockRobots} />);

  // Check if each card is rendered based on the mockRobots data
  mockRobots.forEach((robot) => {
    const nameElement = screen.getByText(robot.name);
    const emailElement = screen.getByText(robot.email);

    expect(nameElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
  });

  // Ensure the correct number of cards are rendered
  const cardElements = screen.getAllByTestId('card-1'); // Replace 'card-1' with the actual card testId
  expect(cardElements).toHaveLength(mockRobots.length);
});