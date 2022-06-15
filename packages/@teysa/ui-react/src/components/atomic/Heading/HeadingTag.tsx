// Global
import React, { ReactNode } from 'react';

type ValidHeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface WithHeadingLevel {
  children: ReactNode | ReactNode[];
  className?: string;
  headingLevel?: ValidHeadingLevel;
  headingOffset?: 0 | ValidHeadingLevel;
}

const TAGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const HeadingTag = ({
  children,
  className,
  headingLevel = 2,
  headingOffset = 0,
}: WithHeadingLevel) => {
  const i = headingLevel + headingOffset - 1;
  const tag = i >= TAGS.length ? 'p' : TAGS[i];
  const HTag = tag as keyof JSX.IntrinsicElements;

  return <HTag className={className}>{children}</HTag>;
};

export default HeadingTag;
