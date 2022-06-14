// Global
import { useId } from 'react';
// Local
import { FormInputBase } from '../form-input-base';
import FormInputWrapper from '../FormInputWrapper/FormInputWrapper';

interface FormInputTextProps extends FormInputBase {}

const FormInputText = ({ name, ...props }: FormInputTextProps) => {
  const id = useId();
  
  return (
    <FormInputWrapper id={id} name={name} {...props}>
      <input type="text" name={name} />
    </FormInputWrapper>
  );
};

export default FormInputText;
