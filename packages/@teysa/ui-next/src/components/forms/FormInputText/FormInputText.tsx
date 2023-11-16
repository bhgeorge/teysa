// Global
import * as React from 'react';
// Local
import { FormInputBase } from '../form-input-base';
import { FormInputWrapper } from '../FormInputWrapper/FormInputWrapper';

interface FormInputTextProps extends FormInputBase {
  inputMode?: 'text' | 'numeric';
  pattern?: string;
  placeholder?: string;
  autoComplete?: 'off' | 'given-name' | 'family-name' | 'email';
  type?: 'text' | 'email' | 'number';
}

export function FormInputText({
  autoComplete = 'off',
  helpText,
  inputMode = 'text',
  label,
  name,
  pattern,
  placeholder,
  required,
  type = 'text',
}: FormInputTextProps) {
  return (
    <FormInputWrapper
      autoComplete={autoComplete}
      helpText={helpText}
      inputMode={inputMode}
      label={label}
      name={name}
      pattern={pattern}
      placeholder={placeholder}
      required={required}
      type={type}
    />
  );
}
