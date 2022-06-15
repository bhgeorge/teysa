// Local
import { FormInputBase } from '../form-input-base';
import FormInputWrapper from '../FormInputWrapper/FormInputWrapper';

interface FormInputTextProps extends FormInputBase {
  inputMode?: 'text' | 'numeric';
  pattern?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'number';
}

const FormInputText = ({
  error,
  helpText,
  inputMode = 'text',
  label,
  name,
  pattern,
  placeholder,
  required,
  type = 'text',
}: FormInputTextProps) => (
  <FormInputWrapper
    error={error}
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

export default FormInputText;
