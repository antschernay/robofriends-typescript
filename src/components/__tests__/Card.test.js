import React from 'react';
import {render } from '@testing-library/react';
import Card from'../Card';


test('it renders the Card component with provided props', () => {
    const mockCard = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      id: 1,
    };
  
    const { getByText, getByAltText } = render(
      <Card name={mockCard.name} email={mockCard.email} id={mockCard.id} />
    );
  
    const nameElement = getByText(mockCard.name);
    const emailElement = getByText(mockCard.email);
    const imageElement = getByAltText('');
  
    expect(nameElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
});
