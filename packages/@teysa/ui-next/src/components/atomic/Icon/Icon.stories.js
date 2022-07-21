// Local
import { Icon } from './Icon';

const ICONS = ['close', 'date', 'expand', 'new-tab'];

export default {
  title: 'Atomic/Icon',
  component: Icon,
  argTypes: {
    icon: {
      control: 'select',
      options: ICONS,
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
    {ICONS.map(icon => (
      <li className="flex flex-col items-center w-16">
        <Icon icon={icon} {...props} />
        <p className="text-xs my-1">{icon}</p>
      </li>
    ))}
  </ul>
);

export const Gallery = GalleryTemplate.bind({});
