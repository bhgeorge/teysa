// Global
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import dynamic from 'next/dynamic';
// Local
import { Link } from './Link';
import { IconNewTab } from '../Icon/icons/icon__new-tab';

// Mock Icon dynamic import
jest.mock('next/dynamic');

beforeAll(() => {
  dynamic.mockImplementation(() => IconNewTab);
});

const createComponent = props => render(<Link {...props}>Click me</Link>);

const testOnClick = () => {
  const CLICK_VAR = 'clicked';
  let clickVar = null;
  const component = createComponent({
    href: '/',
    onClick: event => {
      event.preventDefault();
      clickVar = CLICK_VAR;
    },
  });
  fireEvent.click(component.container.firstChild);
  expect(clickVar).toBe(CLICK_VAR);
};

describe('in any state', () => {
  it('renders correctly', () => {
    const component = createComponent({ href: '/test' });
    expect(component.container.firstChild).toMatchSnapshot();
  });

  it('triggers onClick callback', () => {
    testOnClick();
  });
});

describe('with an external href', () => {
  it('renders a11y content', () => {
    const component = createComponent({ href: 'https://scryfall.com' });
    const a = component.container.firstChild;
    expect(a.getAttribute('target')).toBe('_blank');
    expect(a.getAttribute('rel')).toBe('noreferrer noopener');
    const newTabText = component.queryByText('(Opens in a new tab)');
    expect(newTabText).not.toBe(null);
  });

  it('triggers onClick callback', () => {
    testOnClick();
  });
});
