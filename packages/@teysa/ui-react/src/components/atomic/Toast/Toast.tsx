// Global
import React from 'react';
import classNames from 'classnames';
// Components
import Heading from '../Heading/Heading';

type ToastVariant = 'success' | 'error' | 'none';

interface ToastProps {
  text?: string;
  title?: string;
  variant?: ToastVariant;
}

const variantClasses: Record<ToastVariant, string> = {
  success: 'border-l-theme-success',
  error: 'border-l-theme-error',
  none: '',
};

const Toast = ({ title, text, variant = 'none' }: ToastProps) => {
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
    >
      {!!title && (
        <Heading headingLevel={2} size="xs" className={!!text ? 'mb-1' : undefined}>
          {title}
        </Heading>
      )}
      {!!text && <p className="text-xs">{text}</p>}
    </div>
  );
};

export default Toast;
