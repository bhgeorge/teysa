// Global
import React, { MouseEvent, ReactNode, TouchEvent } from 'react';
import classNames from 'classnames';
// Components
import { Link } from '../Link/Link';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  href?: string;
  onClick?: (event: MouseEvent | TouchEvent) => void;
  type?: 'button' | 'submit';
  variant?: ButtonVariant;
}

const buttonBaseClasses = classNames(
  'border-2',
  'font-bold',
  'font-regular',
  'group',
  'hover:border-theme-interact-hover',
  'hover:underline',
  'inline-flex',
  'items-center',
  'px-2',
  'py-1',
  'rounded-sm',
  'self-start',
  'self-start'
);

const variantClasses: Record<ButtonVariant, string> = {
  primary: classNames(
    buttonBaseClasses,
    'border-theme-interact',
    'bg-theme-interact',
    'text-theme-bg',
    'hover:bg-theme-interact-hover'
  ),
  secondary: classNames(
    buttonBaseClasses,
    'border-theme-interact',
    'hover:text-theme-interact-hover'
  ),
};

export function Button({
  children,
  disabled,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
}: ButtonProps) {
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
}
