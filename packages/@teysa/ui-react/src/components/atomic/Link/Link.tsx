// Global
import React, { MouseEvent, ReactNode, TouchEvent } from 'react';
import NextLink from 'next/link';
// Components
import Icon from '../Icon/Icon';

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: (event: MouseEvent | TouchEvent) => void;
}

const Link = ({ href, children, className, onClick }: LinkProps) => {
  const isExternal = !/^\/|#/g.test(href);
  const cN = className ? className : 'underline inline-flex items-center hover:text-theme-text-alt';

  if (isExternal) {
    return (
      <a className={cN} href={href} onClick={onClick} rel={'noreferrer noopener'} target={'_blank'}>
        {children} <span className="sr-only">(Opens in a new tab)</span>
        <span className="ml-2">
          <Icon icon="new-tab" size="em" />
        </span>
      </a>
    );
  }

  return (
    <NextLink href={href}>
      <a className={cN} onClick={onClick}>
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
