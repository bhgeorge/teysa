// Global
import React from 'react';
import classNames from 'classnames';
// Components
import { Heading } from '../Heading/Heading';

type ToastVariant = 'success' | 'warning' | 'error' | 'none';

export interface ToastProps {
  text?: string;
  title?: string;
  variant?: ToastVariant;
  role?: 'alert';
}

const variantClasses: Record<ToastVariant, string> = {
  success: 'border-l-theme-success',
  warning: 'border-l-theme-warning',
  error: 'border-l-theme-error',
  none: '',
};

export function Toast({ title, text, variant = 'none', role }: ToastProps) {
  if (!title && !text) {
    return <></>;
  }

  return (
    <div
      className={classNames(
        'bg-theme-bg',
        'border',
        'border-l-8',
        'border-theme-bg-alt',
        'p-4',
        'shadow-xl',
        'w-full',
        variantClasses[variant]
      )}
      role={role}
    >
      {!!title && (
        <Heading
          headingLevel={2}
          size="xs"
          className={!!text ? 'mb-1' : undefined}
        >
          {title}
        </Heading>
      )}
      {!!text && <p className="text-xs">{text}</p>}
    </div>
  );
}

export default Toast;
