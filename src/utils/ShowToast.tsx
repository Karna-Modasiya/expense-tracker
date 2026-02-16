import { useToast } from 'react-native-toast-notifications';

type ToastVariants = 'success' | 'danger' | 'warning' | 'normal';

export const useAppToast = () => {
  const toast = useToast();

  const showToast = (
    message: string,
    type: ToastVariants = 'success'
  ) => {
    toast.show(message, {
      type,
      animationType: 'slide-in',
      duration: 2500,
    });
  };

  return { showToast };
};
