// Global
import { Field } from 'formik';
import classNames from 'classnames';
import * as React from 'react';
// Local
import {
  FormInputBase,
  getBorderColor,
  getDescribedBy,
  getErrorId,
  getHelpTextId,
} from '../form-input-base';

export type FormInputCheckboxTypes = 'checkbox' | 'radio';

interface FormInputCheckboxProps extends FormInputBase {
  type?: FormInputCheckboxTypes;
  value?: string | number;
}

export function FormInputCheckbox({
  name,
  label,
  error,
  helpText,
  required,
  type = 'checkbox',
  value,
}: FormInputCheckboxProps) {
  const id = React.useId();

  return (
    <div>
      <div className="flex gap-4 items-center">
        <Field
          aria-describedby={getDescribedBy(id, error, helpText)}
          aria-required={required}
          className={classNames(
            'appearance-none',
            'bg-theme-bg-alt',
            'border-2',
            'border-theme-bg-alt',
            'h-em',
            'w-em',
            'checked:bg-theme-text',
            {
              'rounded-full': type === 'radio',
            },
            getBorderColor(!!error)
          )}
          id={id}
          name={name}
          type={type}
          value={value}
        />
        <label htmlFor={id}>{label}</label>
      </div>
      {error && (
        <p
          role="alert"
          id={getErrorId(id)}
          className="text-theme-error my-2 text-sm"
        >
          {error}
        </p>
      )}
      {helpText && (
        <p id={getHelpTextId(id)} className="text-theme-text-alt my-2 text-sm">
          {helpText}
        </p>
      )}
    </div>
  );
}
