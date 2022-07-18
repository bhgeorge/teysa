import { WithHeadingLevel } from './HeadingTag';
declare type HeadingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
interface HeadingProps extends WithHeadingLevel {
    size?: HeadingSize;
}
declare const Heading: ({ headingLevel, headingOffset, children, size }: HeadingProps) => JSX.Element;
export default Heading;
