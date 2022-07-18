import { ReactNode } from 'react';
declare type ValidHeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export interface WithHeadingLevel {
    children: ReactNode | ReactNode[];
    className?: string;
    headingLevel?: ValidHeadingLevel;
    headingOffset?: 0 | ValidHeadingLevel;
}
declare const HeadingTag: ({ children, className, headingLevel, headingOffset, }: WithHeadingLevel) => JSX.Element;
export default HeadingTag;
