// Global
import { render } from '@testing-library/react';
import React from 'react';
import { Formik } from 'formik';
// Local
import FormInputWrapper from './FormInputWrapper';
import { getErrorId, getHelpTextId } from '../form-input-base';

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
    <Formik onSubmit={() => {}} initialValues={{}}>
      <FormInputWrapper {...props} />
    </Formik>
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
