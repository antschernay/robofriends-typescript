import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBox from '../SearchBox';

test('it renders the SearchBox component and triggers searchChange', () => {
  const mockSearchChange = jest.fn();
  const placeholderText = 'search robots';
  
  render(
    <SearchBox searchChange={mockSearchChange} />
  );

  // Check if the input and placeholder text are present
  const inputElement = screen.getByPlaceholderText(placeholderText);
  expect(inputElement).toBeInTheDocument();

  // Simulate a change event on the input with the desired value
  fireEvent.change(inputElement, { target: { value: 'test' } });

  // Check if the searchChange function is called with the new value
  expect(mockSearchChange).toHaveBeenCalledWith(expect.objectContaining({
    target: expect.objectContaining({
      value: 'test',
    }),
  }));
});