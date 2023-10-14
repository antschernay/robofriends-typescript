import React from 'react';
import { render, screen } from '@testing-library/react';
import Scroll from '../Scroll';

test('it renders its children with a scrollable container', () => {
  const childText = 'This is the child content';
  
  render(
    <Scroll>
      {childText}
    </Scroll>
  );

  // Check if the child content is present within the scrollable container
  const scrollableContainer = screen.getByTestId('scroll-container');
  expect(scrollableContainer).toBeInTheDocument();
  const childElement = screen.getByText(childText);
  expect(childElement).toBeInTheDocument();

  // Check if the container has the expected style properties
  const containerStyle = window.getComputedStyle(scrollableContainer);
  expect(containerStyle.overflowY).toBe('scroll');
  expect(containerStyle.border).toBe('1px solid');
  expect(containerStyle.height).toBe('800px');
});