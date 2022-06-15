import classNames from 'classnames';

export interface FormInputBase {
  error?: string;
  helpText?: string;
  label: string;
  name: string;
  required?: boolean;
}

// Styles
export const getInputClasses = (hasError: boolean) => {
  const borderColor = hasError ? 'border-theme-error' : 'border-theme-bg-alt';
  return classNames('bg-theme-bg-alt', 'border', 'w-full', 'py-1.5', 'px-1', borderColor);
};

// ID helpers
export const getErrorId = (id: string): string => `${id}__error`;
export const getHelpTextId = (id: string): string => `${id}__help-text`;
export const getDescribedBy = (id: string, error?: string, helpText?: string): string | null => {
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
