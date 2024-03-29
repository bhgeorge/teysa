// Global
import { render } from '@testing-library/react';
import * as React from 'react';
import * as Formik from 'formik';
import dynamic from 'next/dynamic';
// Components
import IconDate from '../../atomic/Icon/icons/icon__new-tab';
// Local
import { FormInputWrapper } from './FormInputWrapper';
import { getErrorId, getHelpTextId } from '../form-input-base';

// Mock Icon dynamic import
jest.mock('next/dynamic');

beforeAll(() => {
  dynamic.mockImplementation(() => IconDate);
});

const FIELD_NAME = 'firstName';
const LABEL_TEXT = 'First name';

const DEFAULT_PROPS = {
  label: LABEL_TEXT,
  name: FIELD_NAME,
};

const createComponent = (overrideProps = {}) => {
  const props = {
    ...DEFAULT_PROPS,
    ...overrideProps,
  };

  return render(
    <Formik.Formik onSubmit={() => {}} initialValues={{}}>
      <FormInputWrapper {...props} />
    </Formik.Formik>
  );
};

describe('in any state', () => {
  it('displays the input label', () => {
    const component = createComponent();

    // We contain the correct "for" attribute
    expect(component.queryByLabelText(LABEL_TEXT)).not.toBe(null);
  });
});

describe('if there is an error', () => {
  it('displays an error', () => {
    const ERROR_TEXT = 'First name is required';
    const component = createComponent({ error: ERROR_TEXT });
    const error = component.getByText(ERROR_TEXT);
    const id = component.getByRole('textbox').getAttribute('id');
    expect(error.getAttribute('role')).toBe('alert');
    expect(error.getAttribute('id')).toBe(getErrorId(id));
  });
});

describe('if there is help text', () => {
  it('displays the help text', () => {
    const HELP_TEXT = 'Passwords must be 12 characters in length.';
    const component = createComponent({ helpText: HELP_TEXT });
    const helpText = component.getByText(HELP_TEXT);
    const id = component.getByRole('textbox').getAttribute('id');
    expect(helpText.getAttribute('id')).toBe(getHelpTextId(id));
  });
});

describe('if there is an icon', () => {
  it('renders the icon', () => {
    const component = createComponent({ icon: 'date' });
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
