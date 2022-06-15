// Local
import Toast from './Toast';

export default {
  title: 'Atomic/Toast',
  component: Toast,
};

const Template = (props) => <Toast {...props} />;

export const Default = Template.bind({});
Default.args = {
  title: 'On death trigger',
  text: 'Trigger each of these an additional time',
};
