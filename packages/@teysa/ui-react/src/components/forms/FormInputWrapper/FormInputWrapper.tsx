// Global
import React from 'react';
// Local
import { FormInputBase } from '../form-input-base';

interface FormInputProps extends FormInputBase {
  children: React.ReactNode;
  id: string;
};

const FormInput = ({name, children, label, id, error}: FormInputProps) => {

  return <div>
    <label htmlFor={id}>{label}</label>
    {children}
    {error && <p>{error}</p>}
  </div>
};

export default FormInput;