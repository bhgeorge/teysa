export declare type IconType = 'date' | 'expand' | 'new-tab';
declare type IconSize = 'sm' | 'md' | 'lg' | 'em';
interface IconProps {
    icon: IconType;
    size?: IconSize;
}
declare const Icon: ({ icon, size }: IconProps) => JSX.Element;
export default Icon;
