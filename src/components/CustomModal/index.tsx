import { ReactNode } from 'react';
import Modal from 'react-modal';
import clsx from 'clsx';

import styles from './styles.module.scss';

function CustomModal({ open, children, onClose, loading = false }: CustomModalProps) {
  return (
    <Modal 
      isOpen={open}
      className={clsx(styles.customModalContent, { [styles.loading]: loading })}
      overlayClassName={styles.customModalOverlay}
      onRequestClose={onClose}
    >
      {children}
    </Modal>
  )
}

export interface CustomModalProps {
   open: boolean;
   children: ReactNode;
   onClose: () => void;
   loading?: boolean;
}

export default CustomModal;
