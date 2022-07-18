import { ReactNode } from 'react';
interface CollapseProps {
    title: string;
    children: ReactNode | ReactNode[];
}
declare const Collapse: ({ title, children }: CollapseProps) => JSX.Element;
export default Collapse;
