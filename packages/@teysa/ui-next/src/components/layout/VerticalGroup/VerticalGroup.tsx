// Global
import React, { ReactNode } from 'react';
import classNames from 'classnames';

type VerticalGroupSize = 'sm' | 'md' | 'lg';

interface VerticalGroupProps {
  size?: VerticalGroupSize;
  children: ReactNode | ReactNode[];
}

const sizeClasses: Record<VerticalGroupSize, string> = {
  sm: 'gap-y-8',
  md: 'gap-y-16',
  lg: 'gap-y-32',
};

export function VerticalGroup({ size = 'md', children }: VerticalGroupProps) {
  return (
    <div className={classNames('grid', sizeClasses[size])}>{children}</div>
  );
}
