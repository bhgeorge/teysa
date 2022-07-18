// Global
import React, { useState, createContext, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// Components
import Container from '../../layout/Container/Container';
// Local
import Toast, { ToastProps } from './Toast';

interface GlobalToastProps extends ToastProps {
  id: string;
}

interface ToastContextProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

const ToastContext = createContext({
  addToast: (toast: ToastProps) => {},
  test: 'name',
});

export const useToastContext = () => useContext(ToastContext);

const TIMEOUT = 2500;

const ToastContextProvider = ({ children }: ToastContextProviderProps) => {
  const [toasts, setToasts] = useState<GlobalToastProps[]>([]);

  const removeToast = (id: string) => {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
  };

  const addToast = (toast: ToastProps) => {
    const id = uuidv4();

    window.setTimeout(() => {
      removeToast(id);
    }, TIMEOUT);

    setToasts((toasts) => [...toasts, { ...toast, id }]);
  };

  return (
    <ToastContext.Provider value={{ addToast, test: 'moo' }}>
      <div className="fixed top-0 inset-x-0 z-40 p-2 pointer-events-none">
        <Container>
          <ul>
            <TransitionGroup>
              {toasts.map((toast) => (
                <CSSTransition key={toast.id} timeout={300} className="animate-drop">
                  <li className="w-full">
                    <Toast
                      title={toast.title}
                      text={toast.text}
                      variant={toast.variant}
                      role="alert"
                    />
                  </li>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </ul>
        </Container>
      </div>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastContextProvider;
