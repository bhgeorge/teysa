// Global
import React, { useId, ReactNode } from 'react';
import { Field } from 'formik';
// Local
import {
  FormInputBase,
  getDescribedBy,
  getErrorId,
  getHelpTextId,
  getInputClasses,
} from '../form-input-base';

interface FormInputProps extends FormInputBase {
  children?: ReactNode | ReactNode[];
  [name: string]: unknown;
}

const FormInputWrapper = ({
  children,
  label,
  error,
  helpText,
  name,
  required,
  ...props
}: FormInputProps) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="block mb-1 text-sm">
        {label}
      </label>
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
      {error && (
        <p role="alert" id={getErrorId(id)} className="text-theme-error my-2 text-sm">
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
};

export default FormInputWrapper;
