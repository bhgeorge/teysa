import { ReactNode } from 'react';
import { IconType } from '../../atomic/Icon/Icon';
import { FormInputBase } from '../form-input-base';
interface FormInputProps extends FormInputBase {
    children?: ReactNode | ReactNode[];
    icon?: IconType;
    [name: string]: unknown;
}
declare const FormInputWrapper: ({ children, label, error, helpText, name, icon, required, ...props }: FormInputProps) => JSX.Element;
export default FormInputWrapper;
