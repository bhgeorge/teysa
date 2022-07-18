// Global
import React from 'react';
// Local
import { FormInputBase } from '../form-input-base';
import { FormInputWrapper } from '../FormInputWrapper/FormInputWrapper';

export function FormInputDatepicker({
  name,
  label,
  error,
  helpText,
  required,
}: FormInputBase) {
  return (
    <FormInputWrapper
      error={error}
      helpText={helpText}
      icon="date"
      label={label}
      name={name}
      required={required}
      type="date"
    />
  );
}
