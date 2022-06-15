// Global
import React from 'react';
import { render } from '@testing-library/react';
// Local
import Toast from './Toast';

const TITLE = 'Teysa';
const TEXT = 'Double on death triggers';

const snapshot = (props) => {
  const component = render(<Toast {...props} />);
  expect(component.container.firstChild).toMatchSnapshot();
};

it('renders with a title', () => {
  snapshot({ title: TITLE });
});

it('renders with text', () => {
  snapshot({ text: TEXT });
});

it('renders with both', () => {
  snapshot({ title: TITLE, text: TEXT });
});

it('does not render with neither', () => {
  snapshot({});
});

it('renders success variant', () => {
  snapshot({ title: TITLE, variant: 'success' });
});

it('renders error variant', () => {
  snapshot({ title: TITLE, variant: 'error' });
});
