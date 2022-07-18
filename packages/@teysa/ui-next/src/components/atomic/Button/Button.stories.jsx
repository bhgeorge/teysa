// Local
import { Button } from './Button';

export default {
  title: 'Atomic/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
};

const Template = props => <Button {...props}>Click me</Button>;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
};

export const AsLink = Template.bind({});
AsLink.args = {
  href: 'https://scryfall.com',
};
