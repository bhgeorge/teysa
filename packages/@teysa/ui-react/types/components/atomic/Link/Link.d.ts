import { MouseEvent, ReactNode, TouchEvent } from 'react';
interface LinkProps {
    href: string;
    children: ReactNode;
    className?: string;
    onClick?: (event: MouseEvent | TouchEvent) => void;
}
declare const Link: ({ href, children, className, onClick }: LinkProps) => JSX.Element;
export default Link;
