import React from 'react';
import { ToastProps } from './Toast';
interface ToastContextProviderProps {
    children: React.ReactNode | React.ReactNode[];
}
export declare const useToastContext: () => {
    addToast: (toast: ToastProps) => void;
    test: string;
};
declare const ToastContextProvider: ({ children }: ToastContextProviderProps) => JSX.Element;
export default ToastContextProvider;
