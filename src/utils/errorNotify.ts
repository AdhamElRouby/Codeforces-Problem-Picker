import type { CSSProperties } from 'react';
import { Bounce, toast } from 'react-toastify';

const toastStyles: CSSProperties = {
  backgroundColor: '#000',
  color: '#fff',
  opacity: 0.85,
  width: '235px',
  padding: '10px',
  marginTop: '5px',
  marginBottom: '5px',
  fontFamily: 'Tahoma, Arial, Helvetica, sans-serif',
  fontSize: '1.2rem',
  textAlign: 'left',
  borderRadius: '5px',
  boxShadow: 'none',
};

export const errorNotify = (message: string): void => {
  toast.error(`Extension Error: ${message}`, {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    pauseOnFocusLoss: false,
    progress: undefined,
    theme: 'dark',
    transition: Bounce,
    style: toastStyles,
  });
};
