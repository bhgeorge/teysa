declare type ToastVariant = 'success' | 'error' | 'none';
export interface ToastProps {
    text?: string;
    title?: string;
    variant?: ToastVariant;
    role?: 'alert';
}
declare const Toast: ({ title, text, variant, role }: ToastProps) => JSX.Element;
export default Toast;
