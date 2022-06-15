// Local
import Link from './Link';

export default {
  title: 'Atomic/Link',
  component: Link,
};

const Template = (props) => <Link {...props}>Click me</Link>;

export const Default = Template.bind({});
Default.args = {
  href: '/test',
};

export const External = Template.bind({});
External.args = {
  href: 'https://scryfall.com',
};
