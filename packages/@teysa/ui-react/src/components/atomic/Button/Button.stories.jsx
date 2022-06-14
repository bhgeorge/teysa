// Local
import Button from './Button';

export default {
  title: 'Atomic/Button',
  component: Button,
};

const Template = () => <Button />;

export const Default = Template.bind({});
Default.args = {
  text: 'Click me',
};
