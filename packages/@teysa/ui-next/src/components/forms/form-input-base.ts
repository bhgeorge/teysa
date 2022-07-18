// Global
import classNames from 'classnames';
// Components
import { IconType } from '../atomic/Icon/Icon';

export interface FormInputBase {
  error?: string;
  helpText?: string;
  icon?: IconType;
  label: string;
  name: string;
  required?: boolean;
}

// Styles
export const getInputClasses = (hasError: boolean) => {
  const borderColor = hasError ? 'border-theme-error' : 'border-theme-bg-alt';
  return classNames(
    'appearance-none',
    'bg-theme-bg-alt',
    'border',
    'px-1',
    'py-1.5',
    'relative',
    'w-full',
    borderColor
  );
};

// ID helpers
export const getErrorId = (id: string): string => `${id}__error`;
export const getHelpTextId = (id: string): string => `${id}__help-text`;
export const getDescribedBy = (
  id: string,
  error?: string,
  helpText?: string
): string | null => {
  const describedBy = [];

  if (error) {
    describedBy.push(getErrorId(id));
  }
  if (helpText) {
    describedBy.push(getHelpTextId(id));
  }

  if (describedBy.length === 0) {
    return null;
  }

  return describedBy.join(' ');
};
