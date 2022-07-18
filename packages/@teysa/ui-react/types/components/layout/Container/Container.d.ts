import { ReactNode } from 'react';
declare type ContainerSize = 'sm' | 'md' | 'lg';
interface ContainerProps {
    size?: ContainerSize;
    children: ReactNode | ReactNode[];
}
declare const Container: ({ size, children }: ContainerProps) => JSX.Element;
export default Container;
