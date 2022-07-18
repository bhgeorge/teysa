import { FormInputBase } from '../form-input-base';
interface FormInputTextProps extends FormInputBase {
    inputMode?: 'text' | 'numeric';
    pattern?: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'number';
}
declare const FormInputText: ({ error, helpText, inputMode, label, name, pattern, placeholder, required, type, }: FormInputTextProps) => JSX.Element;
export default FormInputText;
