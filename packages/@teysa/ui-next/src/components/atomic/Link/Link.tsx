// Global
import React, { MouseEvent, ReactNode, TouchEvent } from 'react';
import NextLink from 'next/link';
// Components
import { Icon } from '../Icon/Icon';

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: (event: MouseEvent | TouchEvent) => void;
}

export function Link({ href, children, className, onClick }: LinkProps) {
  const isExternal = !/^\/|#/g.test(href);
  const cN = className
    ? className
    : 'underline text-theme-interact inline-flex items-center hover:text-theme-interact-hover';

  if (isExternal) {
    return (
      <a
        className={cN}
        href={href}
        onClick={onClick}
        rel={'noreferrer noopener'}
        target={'_blank'}
      >
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
}
