// Global
import React from 'react';

interface ChipProps {
  text: string;
}

export function Chip({ text }: ChipProps) {
  return (
    <span className="rounded-2xl bg-theme-bg-alt text-xs px-2 py-1">
      {text}
    </span>
  );
}
