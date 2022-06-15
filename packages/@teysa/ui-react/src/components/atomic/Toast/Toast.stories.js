// Components
import Button from '../Button/Button';
// Local
import Toast from './Toast';
import ToastContextProvider, { useToastContext } from './ToastContext';

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

const MockToastTrigger = () => {
  const { addToast } = useToastContext();

  const TITLES = ['Teysa Karlov', 'Orzhov Scion', 'Envoy of Ghosts'];
  const TEXT = [
    '“Spend your life betraying me if you wish. I’ll simply take it up with your ghost.”',
    'While Kaya is guildmaster, Teysa waits patiently at the center of the Orzhov web of power.',
  ];
  const VARIANTS = ['success', 'error', 'none'];

  return (
    <Button
      onClick={() => {
        addToast({
          title: TITLES[Math.floor(Math.random() * TITLES.length)],
          text: TEXT[Math.floor(Math.random() * TEXT.length)],
          variant: VARIANTS[Math.floor(Math.random() * VARIANTS.length)],
        });
      }}
    >
      Trigger toast
    </Button>
  );
};

const TemplateWithContext = () => (
  <ToastContextProvider>
    <MockToastTrigger />
  </ToastContextProvider>
);

export const WithContext = TemplateWithContext.bind({});
