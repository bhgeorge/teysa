import { MouseEvent, ReactNode, TouchEvent } from 'react';
declare type ButtonVariant = 'primary' | 'secondary';
interface ButtonProps {
    children: ReactNode;
    disabled?: boolean;
    href?: string;
    onClick?: (event: MouseEvent | TouchEvent) => void;
    type?: 'button' | 'submit';
    variant?: ButtonVariant;
}
declare const Button: ({ children, disabled, href, onClick, type, variant, }: ButtonProps) => JSX.Element;
export default Button;
