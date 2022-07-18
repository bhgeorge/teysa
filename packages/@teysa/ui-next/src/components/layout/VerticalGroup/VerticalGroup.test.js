// Global
import { render } from '@testing-library/react';
import React from 'react';
// Storybook
import ContentMock from '../../../../.storybook/components/ContentMock';
// Local
import { VerticalGroup } from './VerticalGroup';

const snapshot = size => {
  const component = render(
    <VerticalGroup size={size}>
      <ContentMock />
    </VerticalGroup>
  );

  expect(component.container.firstChild).toMatchSnapshot();
};

it('renders correctly at all sizes', () => {
  snapshot('sm');
  snapshot('md');
  snapshot('lg');
});
