// Global
import React, { ReactNode } from 'react';
import classNames from 'classnames';

type ContainerSize = 'sm' | 'md' | 'lg';

interface ContainerProps {
  size?: ContainerSize;
  children: ReactNode | ReactNode[];
}

const sizeClasses: Record<ContainerSize, string> = {
  sm: 'max-w-prose',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
};

export function Container({ size = 'md', children }: ContainerProps) {
  return (
    <div
      className={classNames(
        'w-full',
        'mx-auto',
        'px-gutter',
        sizeClasses[size]
      )}
    >
      {children}
    </div>
  );
}
