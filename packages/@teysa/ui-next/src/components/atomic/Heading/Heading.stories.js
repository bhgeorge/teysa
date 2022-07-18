// Local
import { Heading } from './Heading';

export default {
  title: 'Atomic/Heading',
  component: Heading,
};

const Template = props => <Heading {...props}>Teysa Karlov</Heading>;

export const Default = Template.bind({});

const TemplateWithContext = props => (
  <div className="max-w-prose">
    <Heading {...props}>Teysa Karlov</Heading>
    <p className="mb-4">
      If a creature dying causes a triggered ability of a permanent you control
      to trigger, that ability triggers an additional time.
    </p>
    <p className="mb-4">
      Creature tokens you control have vigilance and lifelink.
    </p>
    <p>
      <i>
        While Kaya is guildmaster, Teysa waits patiently at the center of the
        Orzhov web of power.
      </i>
    </p>
  </div>
);

export const WithContext = TemplateWithContext.bind({});
