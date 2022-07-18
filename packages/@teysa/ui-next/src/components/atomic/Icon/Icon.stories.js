// Local
import { Icon } from './Icon';

export default {
  title: 'Atomic/Icon',
  component: Icon,
  argTypes: {
    icon: {
      control: 'select',
      options: ['date', 'expand', 'new-tab'],
    },
  },
};

const Template = props => <Icon {...props} />;

export const Default = Template.bind({});
Default.args = {
  icon: 'new-tab',
};

const GalleryTemplate = ({ icon, ...props }) => (
  <ul className="flex gap-4">
    {['date', 'expand', 'new-tab'].map(icon => (
      <li>
        <Icon icon={icon} {...props} />
        <p className="text-xs text-center my-1">{icon}</p>
      </li>
    ))}
  </ul>
);

export const Gallery = GalleryTemplate.bind({});
