import { ReactNode } from 'react';
declare type VerticalGroupSize = 'sm' | 'md' | 'lg';
interface VerticalGroupProps {
    size?: VerticalGroupSize;
    children: ReactNode | ReactNode[];
}
declare const VerticalGroup: ({ size, children }: VerticalGroupProps) => JSX.Element;
export default VerticalGroup;
