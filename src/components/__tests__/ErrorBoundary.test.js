import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../ErrorBoundary';

// Mock component for testing
function MockChildComponent() {
  return <div>Ooops. That is not good</div>;
}

test('renders error message when an error occurs', () => {
  // Mock an error with a string message
  const mockError = new Error('Test error');
  console.error = jest.fn(); // Suppress error output

  render(
    <ErrorBoundary>
      <MockChildComponent />
    </ErrorBoundary>
  );

  const errorText = screen.getByText("Ooops. That is not good");
  expect(errorText).toBeInTheDocument();
});