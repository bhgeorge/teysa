// Local
import { FormInputBase } from '../form-input-base';
import FormInputWrapper from '../FormInputWrapper/FormInputWrapper';

const FormInputDatepicker = ({ name, label, error, helpText, required }: FormInputBase) => (
  <FormInputWrapper
    error={error}
    helpText={helpText}
    label={label}
    name={name}
    required={required}
    type="date"
  ></FormInputWrapper>
);

export default FormInputDatepicker;
