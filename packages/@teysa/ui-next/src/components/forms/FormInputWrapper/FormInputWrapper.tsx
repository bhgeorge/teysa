// Global
import * as React from 'react';
import { Field } from 'formik';
// Components
import { Icon } from '../../atomic/Icon/Icon';
// Local
import {
  FormInputBase,
  getDescribedBy,
  getErrorId,
  getHelpTextId,
  getInputClasses,
} from '../form-input-base';

interface FormInputWrapperProps extends FormInputBase {
  children?: React.ReactNode | React.ReactNode[];
  [name: string]: unknown;
}

export function FormInputWrapper({
  children,
  label,
  error,
  helpText,
  name,
  icon,
  required,
  ...props
}: FormInputWrapperProps) {
  const id = React.useId();

  return (
    <div>
      <label htmlFor={id} className="block mb-1 text-sm">
        {label}
      </label>
      <div className="relative">
        <Field
          aria-describedby={getDescribedBy(id, error, helpText)}
          aria-required={required}
          className={getInputClasses(!!error)}
          id={id}
          name={name}
          {...props}
        >
          {children}
        </Field>
        {icon && (
          <span className="absolute top-1/2 right-1 -translate-y-1/2 pointer-events-none">
            <Icon icon={icon} />
          </span>
        )}
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
