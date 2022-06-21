// Global
import React from 'react';
// Local
import { FormInputBase } from '../form-input-base';
import FormInputWrapper from '../FormInputWrapper/FormInputWrapper';

interface FormInputSelectProps extends FormInputBase {
  options: {
    name: string;
    value?: string | number;
  }[];
}

const FieldInputSelect = ({
  name,
  label,
  error,
  helpText,
  required,
  options,
}: FormInputSelectProps) => (
  <FormInputWrapper
    as="select"
    error={error}
    helpText={helpText}
    icon="expand"
    label={label}
    name={name}
    required={required}
  >
    {options.map((opt) => (
      <option key={opt.name} value={opt.value} className="bg-theme-bg">
        {opt.name}
      </option>
    ))}
  </FormInputWrapper>
);

export default FieldInputSelect;
