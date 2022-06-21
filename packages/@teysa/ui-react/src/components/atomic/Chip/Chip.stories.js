// Local
import Chip from './Chip';

export default {
  title: 'Atomic/Chip',
  component: Chip,
};

const Template = (props) => <Chip {...props} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Aristocrats',
};
