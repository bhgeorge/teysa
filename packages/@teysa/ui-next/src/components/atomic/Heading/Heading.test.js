// Global
import React from 'react';
import { render } from '@testing-library/react';
// Local
import { Heading } from './Heading';

const snapshot = size => {
  const component = render(<Heading size={size}>Teysa</Heading>);
  expect(component.container.firstChild).toMatchSnapshot();
};

it('renders at each size', () => {
  ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
    snapshot(size);
  });
});
