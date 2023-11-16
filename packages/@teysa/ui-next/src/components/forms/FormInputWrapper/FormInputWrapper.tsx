// Global
import * as React from 'react';
import * as Formik from 'formik';
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

type FormInputWrapperProps = FormInputBase &
  React.PropsWithChildren & {
    [name: string]: unknown;
  };

export function FormInputWrapper({
  children,
  label,
  helpText,
  name,
  icon,
  required,
  ...props
}: FormInputWrapperProps) {
  const id = React.useId();

  const { errors, touched } = Formik.useFormikContext();

  const hasError = Boolean(
    (touched as Record<string, boolean | undefined>)[name] &&
      (errors as Record<string, string | undefined>)[name]
  );

  return (
    <div>
      <label htmlFor={id} className="block mb-1 text-sm">
        {label}
      </label>
      <div className="relative">
        <Formik.Field
          aria-describedby={getDescribedBy(id, hasError, helpText)}
          aria-required={required}
          className={getInputClasses(hasError)}
          id={id}
          name={name}
          {...props}
        >
          {children}
        </Formik.Field>
        {icon && (
          <span className="absolute top-1/2 right-1 -translate-y-1/2 pointer-events-none">
            <Icon icon={icon} />
          </span>
        )}
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
