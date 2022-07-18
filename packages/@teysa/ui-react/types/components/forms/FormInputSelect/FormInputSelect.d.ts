import { FormInputBase } from '../form-input-base';
interface FormInputSelectProps extends FormInputBase {
    options: {
        name: string;
        value?: string | number;
    }[];
}
declare const FieldInputSelect: ({ name, label, error, helpText, required, options, }: FormInputSelectProps) => JSX.Element;
export default FieldInputSelect;
