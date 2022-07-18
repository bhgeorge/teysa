// Global
import React from 'react';
import dynamic from 'next/dynamic';

export type IconType = 'date' | 'expand' | 'new-tab';

type IconSize = 'sm' | 'md' | 'lg' | 'em';

interface IconProps {
  icon: IconType;
  size?: IconSize;
}

const iconClasses: Record<IconSize, string> = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-10 w-10',
  em: 'h-em w-em',
};

export function Icon({ icon, size = 'md' }: IconProps) {
  const IconContent = dynamic(() => import(`./icons/icon__${icon}`));

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={iconClasses[size]}
    >
      <IconContent />
    </svg>
  );
}
