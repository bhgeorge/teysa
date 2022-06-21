// Global
import React from 'react';
// Local
import { FormInputBase } from '../form-input-base';
import FormInputWrapper from '../FormInputWrapper/FormInputWrapper';

const FormInputDatepicker = ({ name, label, error, helpText, required }: FormInputBase) => (
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

export default FormInputDatepicker;
