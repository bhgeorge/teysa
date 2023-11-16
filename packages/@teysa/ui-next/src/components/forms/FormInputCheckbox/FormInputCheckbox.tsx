// Global
import * as Formik from 'formik';
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

type FormInputCheckboxProps = FormInputBase & {
  type?: FormInputCheckboxTypes;
  value?: string | number;
};

export function FormInputCheckbox({
  name,
  label,
  helpText,
  required,
  type = 'checkbox',
  value,
}: FormInputCheckboxProps) {
  const id = React.useId();

  const { errors, touched } = Formik.useFormikContext();

  const hasError = Boolean(
    (touched as Record<string, boolean | undefined>)[name] &&
      (errors as Record<string, string | undefined>)[name]
  );

  return (
    <div>
      <div className="flex gap-4 items-center">
        <Formik.Field
          aria-describedby={getDescribedBy(id, hasError, helpText)}
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
            getBorderColor(hasError)
          )}
          id={id}
          name={name}
          type={type}
          value={value}
        />
        <label htmlFor={id}>{label}</label>
      </div>
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
    </div>
  );
}
