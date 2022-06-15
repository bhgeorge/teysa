// Global
import classNames from 'classnames';
// Styles
import '../src/styles/main.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    disable: true,
  },
  layout: 'fullscreen',
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Component window theme',
    default: 'theme-dark',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'theme-dark', title: 'Dark' },
        { value: 'theme-light', title: 'Light' },
      ],
    },
  },
};

const withTheme = (Story, context) => (
  <div
    className={classNames(
      context.globals.theme,
      'bg-theme-bg',
      'min-h-screen',
      'p-4',
      'text-theme-text'
    )}
  >
    <Story {...context} />
  </div>
);

export const decorators = [withTheme];
