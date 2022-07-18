// Global
import React from 'react';
import classNames from 'classnames';
// Local
import { HeadingTag, WithHeadingLevel } from './HeadingTag';

type HeadingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface HeadingProps extends WithHeadingLevel {
  size?: HeadingSize;
}

const sizeClasses: Record<HeadingSize, string> = {
  xs: 'text-sm font-bold mb-2',
  sm: 'text-xl md:text-2xl font-bold mb-4',
  md: 'text-2xl md:text-4xl font-bold mb-4',
  lg: 'text-4xl md:text-5xl font-bold leading-snug md:leading-snug mb-8',
  xl: 'text-6xl md:text-7xl font-bold leading-snug md:leading-snug mb-16',
};

export function Heading({
  headingLevel,
  headingOffset,
  children,
  size = 'md',
}: HeadingProps) {
  return (
    <HeadingTag
      headingLevel={headingLevel}
      headingOffset={headingOffset}
      className={classNames(sizeClasses[size])}
    >
      {children}
    </HeadingTag>
  );
}
