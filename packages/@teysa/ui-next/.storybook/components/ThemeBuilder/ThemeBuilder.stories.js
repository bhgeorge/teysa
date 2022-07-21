// Local
import ThemeBuilder from './ThemeBuilder';

const themeVarKeys = [
  'text',
  'text_alt',
  'bg',
  'bg_alt',
  'error',
  'success',
  'warning',
  'interact',
  'interact_hover',
];

const controlMap = {};
themeVarKeys.forEach(key => {
  controlMap[key] = {
    control: { type: 'color' },
  };
});

export default {
  title: 'Tools/Theme Builder',
  component: ThemeBuilder,
  argTypes: {
    ...controlMap,
  },
};

const Template = props => <ThemeBuilder {...props} />;

export const Default = Template.bind({});
Default.args = {
  text: '#fbfae9',
  text_alt: '#f8f3c9',
  bg: '#150f10',
  bg_alt: '#433641',
  error: '#d386af',
  success: '#9dd975',
  warning: '#dcbd67',
  interact: '#dcbd67',
  interact_hover: '#e9d49b',
};
