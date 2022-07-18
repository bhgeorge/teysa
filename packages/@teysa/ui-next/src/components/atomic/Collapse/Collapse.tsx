// Global
import React, { ReactNode, useState, useId } from 'react';
import classNames from 'classnames';
// Components
import { Icon } from '../Icon/Icon';

interface CollapseProps {
  title: string;
  children: ReactNode | ReactNode[];
}

export function Collapse({ title, children }: CollapseProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const id = useId();

  return (
    <div>
      <button
        aria-controls={id}
        aria-expanded={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="flex justify-between items-center w-full bg-purple-dark p-2 border-b border-b-theme-bg-alt"
        type="button"
      >
        {title}
        <span
          className={classNames('transform-gpu', 'transition-transform', {
            'rotate-0': !isOpen,
            'rotate-180': isOpen,
          })}
        >
          <Icon icon="expand" />
        </span>
      </button>
      <div
        id={id}
        className={classNames({
          hidden: !isOpen,
          'p-2': isOpen,
          'pt-4': isOpen,
        })}
      >
        {children}
      </div>
    </div>
  );
}
