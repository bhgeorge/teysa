// Global
import { useRef, useState } from 'react';

// Components
import ContentMock from '../../../../.storybook/components/ContentMock';
import { Button } from '../Button/Button';
// Local
import { Modal } from './Modal';

export default {
  title: 'Atomic/Modal',
  component: Modal,
};

const Template = ({ children, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const portalTarget = useRef(null);

  return (
    <>
      <Button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Open modal
      </Button>
      <div data-test-name="portal-target" ref={portalTarget} />
      <Modal
        {...props}
        parent={portalTarget.current}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <ContentMock />
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Teysa Karlov',
};
