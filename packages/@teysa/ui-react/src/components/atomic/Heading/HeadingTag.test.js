// Global
import React from 'react';
import { render } from '@testing-library/react';
// Local
import HeadingTag from './HeadingTag';

const testTag = (props, tag) => {
  const component = render(<HeadingTag {...props}>Heading</HeadingTag>);
  expect(component.container.firstChild.tagName).toBe(tag);
};

describe('renders a valid heading level when', () => {
  it('has no props', () => {
    testTag({}, 'H2');
  });

  it('has a headingLevel', () => {
    testTag({ headingLevel: 3 }, 'H3');
  });

  it('has a headingOffset', () => {
    testTag({ headingOffset: 2 }, 'H4');
  });

  it('has both', () => {
    testTag({ headingLevel: 1, headingOffset: 2 }, 'H3');
  });

  it('is out of range', () => {
    testTag({ headingLevel: 5, headingOffset: 4 }, 'P');
  });
});
