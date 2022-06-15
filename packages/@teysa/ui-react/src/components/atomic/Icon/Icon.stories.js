// Local
import Icon from './Icon';

export default {
  title: 'Atomic/Icon',
  component: Icon,
  argTypes: {
    icon: {
      control: 'select',
      options: ['new-tab'],
    },
  },
};

const Template = (props) => <Icon {...props} />;

export const Default = Template.bind({});
Default.args = {
  icon: 'new-tab',
};
