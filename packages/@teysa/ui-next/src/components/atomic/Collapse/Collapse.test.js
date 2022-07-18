// Global
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import dynamic from 'next/dynamic';
// Components
import IconExpand from '../Icon/icons/icon__expand';
// Local
import { Collapse } from './Collapse';

// Mock Icon dynamic import
jest.mock('next/dynamic');

beforeAll(() => {
  dynamic.mockImplementation(() => IconExpand);
});

const createComponent = () =>
  render(
    <Collapse title="Oracle text">
      <p className="mb-4">
        If a creature dying causes a triggered ability of a permanent you
        control to trigger, that ability triggers an additional time.
      </p>
      <p className="mb-4">
        Creature tokens you control have vigilance and lifelink.
      </p>
      <p>
        <i>
          While Kaya is guildmaster, Teysa waits patiently at the center of the
          Orzhov web of power.
        </i>
      </p>
    </Collapse>
  );

const clickToggle = component => {
  const button = component.getByRole('button');
  fireEvent.click(button);
  return button;
};

describe('when closed', () => {
  it('opens on click', () => {
    const component = createComponent();
    expect(component.container.firstChild).toMatchSnapshot();
    const button = clickToggle(component);
    expect(button.getAttribute('aria-expanded')).toBe('true');
  });
});

describe('when open', () => {
  it('closes on click', () => {
    const component = createComponent();
    // Start open
    const button = clickToggle(component);
    expect(component.container.firstChild).toMatchSnapshot();
    // Close
    clickToggle(component);
    expect(button.getAttribute('aria-expanded')).toBe('false');
  });
});
