// Global
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
// Local
import { Button } from './Button';

const createComponent = props => render(<Button {...props}>Click me</Button>);

describe('it has an href', () => {
  it('uses the Link component', () => {
    const component = createComponent({ href: '/test' });
    expect(component.container.firstChild.tagName).toBe('A');
  });
});

describe('it is a button', () => {
  it('displays as a <button>', () => {
    const CLICK_VAL = 'clicked';
    let clickVal = null;
    const component = createComponent({
      onClick: () => {
        clickVal = CLICK_VAL;
      },
    });

    const button = component.container.firstChild;
    expect(button).toMatchSnapshot();
    expect(button.getAttribute('type')).toBe('button');
    // Test onClick
    fireEvent.click(button);
    expect(clickVal).toBe(CLICK_VAL);
  });

  it('displays as submit', () => {
    const component = createComponent({ type: 'submit' });
    expect(component.container.firstChild.getAttribute('type')).toBe('submit');
  });

  it('displays a secondary variant', () => {
    const component = createComponent({ variant: 'secondary' });
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
