// Global
import { render } from '@testing-library/react';
import React from 'react';
// Local
import Chip from './Chip';

const createComponent = (props) => render(<Chip {...props} />);

it('renders correctly', () => {
  const component = createComponent({ text: 'Teysa' });
  expect(component.container.firstChild).toMatchSnapshot();
});
