// Local
import Button from './Button';

export default {
  title: 'Atomic/Button',
  component: Button,
};

const Template = (props) => <Button {...props} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Click me',
};
