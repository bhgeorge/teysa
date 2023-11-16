// Global
import React from 'react';
// Components
import { Container } from '../../layout/Container/Container';
// Local
import { Toast, ToastProps } from './Toast';

type GlobalToastProps = ToastProps & {
  id: string;
};

const ToastContext = React.createContext({
  addToast: (toast: ToastProps) => {
    console.log(toast);
  },
  test: 'name',
});

export const useToastContext = () => React.useContext(ToastContext);

const TIMEOUT = 2500;

export function ToastContextProvider({ children }: React.PropsWithChildren) {
  const [numToasts, setNumToasts] = React.useState<number>(0);
  const [toasts, setToasts] = React.useState<GlobalToastProps[]>([]);

  const componentId = React.useId();

  const removeToast = (id: string) => {
    setToasts(toasts => toasts.filter(toast => toast.id !== id));
  };

  const addToast = (toast: ToastProps) => {
    const id = `${componentId}__${numToasts}`;
    setNumToasts(numToasts + 1);

    window.setTimeout(() => {
      removeToast(id);
    }, TIMEOUT);

    setToasts(toasts => [...toasts, { ...toast, id }]);
  };

  return (
    <ToastContext.Provider value={{ addToast, test: 'moo' }}>
      <div className="absolute top-0 inset-x-0 z-40 p-2 pointer-events-none">
        <Container>
          <ul>
            {toasts.map(toast => (
              <li className="w-full">
                <Toast
                  title={toast.title}
                  text={toast.text}
                  variant={toast.variant}
                  role="alert"
                />
              </li>
            ))}
          </ul>
        </Container>
      </div>
      {children}
    </ToastContext.Provider>
  );
}
