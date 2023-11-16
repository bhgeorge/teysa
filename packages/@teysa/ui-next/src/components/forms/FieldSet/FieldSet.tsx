// Global
import classNames from 'classnames';
import React from 'react';
import * as Formik from 'formik';

import { sizeClasses } from '../../atomic/Heading/Heading';
// Local
import { FormInputBase, getBorderColor, getErrorId, getHelpTextId } from '../form-input-base';
import { FormInputCheckbox, FormInputCheckboxTypes } from '../FormInputCheckbox/FormInputCheckbox';

interface FieldSetProps extends FormInputBase {
  type: FormInputCheckboxTypes;
  options: {
    label: string;
    value: string | number;
  }[];
}

export function FieldSet({ options, label, name, helpText, type = 'radio' }: FieldSetProps) {
  const id = React.useId();

  const { errors, touched } = Formik.useFormikContext();

  const hasError = Boolean(
    (touched as Record<string, boolean | undefined>)[name] &&
      (errors as Record<string, string | undefined>)[name]
  );

  return (
    <>
      <fieldset
        className={classNames(
          'flex',
          'flex-col',
          'gap-3',
          'border',
          getBorderColor(hasError),
          'p-4',
          'pt-2'
        )}
      >
        <legend className={sizeClasses.xs}>{label}</legend>
        {options.map(({ value, label }) => (
          <FormInputCheckbox
            label={label}
            name={type === 'radio' ? name : `${name}__${value}`}
            value={value}
            type={type}
          />
        ))}
      </fieldset>
      <Formik.ErrorMessage name={name}>
        {err => (
          <p role="alert" id={getErrorId(id)} className="text-theme-error my-2 text-sm">
            {err}
          </p>
        )}
      </Formik.ErrorMessage>
      {helpText && (
        <p id={getHelpTextId(id)} className="text-theme-text-alt my-2 text-sm">
          {helpText}
        </p>
      )}
    </>
  );
}
