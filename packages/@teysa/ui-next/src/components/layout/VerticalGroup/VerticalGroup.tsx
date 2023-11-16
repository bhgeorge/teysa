// Global
import * as React from 'react';
import classNames from 'classnames';

type VerticalGroupSize = 'xs' | 'sm' | 'md' | 'lg';

type VerticalGroupProps = React.PropsWithChildren & {
  size?: VerticalGroupSize;
};

const sizeClasses: Record<VerticalGroupSize, string> = {
  xs: 'gap-y-4',
  sm: 'gap-y-8',
  md: 'gap-y-16',
  lg: 'gap-y-32',
};

export function VerticalGroup({ size = 'md', children }: VerticalGroupProps) {
  return (
    <div className={classNames('grid', sizeClasses[size])}>{children}</div>
  );
}
