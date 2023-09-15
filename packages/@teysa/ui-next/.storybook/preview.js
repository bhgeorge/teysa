// Global
import classNames from 'classnames';
// Styles
import '../src/styles/main.css';

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  backgrounds: {
    disable: true,
  },
  layout: 'fullscreen',
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Component window theme',
    value: 'theme-orzhov',
    default: 'theme-orzhov',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'theme-orzhov', title: 'Orzhov' },
        { value: 'theme-sage', title: 'Sage' },
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
