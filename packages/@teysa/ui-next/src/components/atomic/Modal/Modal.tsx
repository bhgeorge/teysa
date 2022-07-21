// Global
import FocusTrap from 'focus-trap-react';
import React, { ReactNode, useId } from 'react';
import { createPortal } from 'react-dom';
// Components
import { Heading } from '../Heading/Heading';
import { Icon } from '../Icon/Icon';

interface ModalProps {
  children: ReactNode | ReactNode[];
  isOpen: boolean;
  onClose?: () => void;
  parent: HTMLElement;
  title: string;
}

export function Modal({
  children,
  isOpen,
  onClose,
  parent,
  title,
}: ModalProps) {
  const id = useId();

  if (!isOpen || !parent) {
    return <></>;
  }

  const handleOnClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return createPortal(
    <div className="fixed inset-0 px-8 py-4 backdrop-blur-sm backdrop-brightness-75 overflow-y-auto">
      <FocusTrap
        focusTrapOptions={{
          onDeactivate: handleOnClose,
          clickOutsideDeactivates: !!onClose,
        }}
      >
        <div
          aria-describedby={id}
          aria-modal="true"
          role="dialog"
          className="bg-theme-bg p-8 mx-auto max-w-prose"
        >
          <header className="flex gap-4 justify-between items-start">
            <Heading id={id}>{title}</Heading>
            {!!onClose && (
              <button type="button" onClick={handleOnClose}>
                <Icon icon="close" />
                <span className="sr-only">Close modal</span>
              </button>
            )}
          </header>
          <main>{children}</main>
        </div>
      </FocusTrap>
    </div>,
    parent
  );
}
