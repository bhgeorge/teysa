// Global
import { render } from '@testing-library/react';
import React from 'react';
// Storybook
import ContentMock from '../../../../.storybook/components/ContentMock';
// Local
import Container from './Container';

const snapshot = (size) => {
  const component = render(
    <Container size={size}>
      <ContentMock />
    </Container>
  );

  expect(component.container.firstChild).toMatchSnapshot();
};

it('renders correctly at all sizes', () => {
  snapshot('sm');
  snapshot('md');
  snapshot('lg');
});
