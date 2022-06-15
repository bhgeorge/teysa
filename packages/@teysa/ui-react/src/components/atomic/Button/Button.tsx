// Global
import React, { MouseEvent, ReactNode, TouchEvent } from 'react';
import classNames from 'classnames';
// Components
import Link from '../Link/Link';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  href?: string;
  onClick?: (event: MouseEvent | TouchEvent) => void;
  type?: 'button' | 'submit';
  variant?: ButtonVariant;
}

const buttonBaseClasses =
  'font-bold inline-flex justify-between items-center self-start border-2 py-1 px-2';

const variantClasses: Record<ButtonVariant, string> = {
  primary: classNames(
    buttonBaseClasses,
    'bg-theme-text',
    'border-theme-text',
    'text-theme-bg',
    'hover:bg-theme-text-alt',
    'hover:border-theme-text-alt'
  ),
  secondary: classNames(
    buttonBaseClasses,
    'hover:bg-theme-text-alt',
    'hover:text-theme-bg',
    'border-theme-text-alt'
  ),
};

const Button = ({
  children,
  disabled,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
}: ButtonProps) => {
  const cN = classNames(variantClasses[variant]);

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={cN}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cN} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
