// Global
import React from 'react';
// Local
import { FormInputBase } from '../form-input-base';
import { FormInputWrapper } from '../FormInputWrapper/FormInputWrapper';

export function FormInputDatepicker({ name, label, helpText, required }: FormInputBase) {
  return (
    <FormInputWrapper
      helpText={helpText}
      icon="date"
      label={label}
      name={name}
      required={required}
      type="date"
    />
  );
}
