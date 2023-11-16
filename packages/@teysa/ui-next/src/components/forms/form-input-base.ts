// Global
import classNames from 'classnames';
// Components
import { IconType } from '../atomic/Icon/Icon';

export interface FormInputBase {
  helpText?: string;
  icon?: IconType;
  label: string;
  name: string;
  required?: boolean;
}

export const getBorderColor = (hasError: boolean) =>
  hasError ? 'border-theme-error' : 'border-theme-bg-alt';

// Styles
export const getInputClasses = (hasError: boolean) => {
  return classNames(
    'appearance-none',
    'bg-theme-bg-alt',
    'border',
    'px-1',
    'py-1.5',
    'relative',
    'w-full',
    getBorderColor(hasError)
  );
};

// ID helpers
export const getErrorId = (id: string): string => `${id}__error`;
export const getHelpTextId = (id: string): string => `${id}__help-text`;
export const getDescribedBy = (id: string, error?: boolean, helpText?: string): string | null => {
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
