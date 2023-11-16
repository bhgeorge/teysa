// Local
import { Icon } from './Icon';
import { iconPaths } from './icon-paths';

export default {
  title: 'Atomic/Icon',
  component: Icon,
  argTypes: {
    icon: {
      control: 'select',
      options: Object.keys(iconPaths),
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
    {Object.keys(iconPaths).map(icon => (
      <li className="flex flex-col items-center w-16">
        <Icon icon={icon} {...props} />
        <p className="text-xs my-1">{icon}</p>
      </li>
    ))}
  </ul>
);

export const Gallery = GalleryTemplate.bind({});
