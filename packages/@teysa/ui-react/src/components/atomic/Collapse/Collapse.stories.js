// Local
import Collapse from './Collapse';

export default {
  title: 'Atomic/Collapse',
  component: Collapse,
};

const Template = (props) => (
  <Collapse {...props}>
    <p className="mb-4">
      If a creature dying causes a triggered ability of a permanent you control to trigger, that
      ability triggers an additional time.
    </p>
    <p className="mb-4">Creature tokens you control have vigilance and lifelink.</p>
    <p>
      <i>
        While Kaya is guildmaster, Teysa waits patiently at the center of the Orzhov web of power.
      </i>
    </p>
  </Collapse>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Oracle text',
};
