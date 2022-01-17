import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MouseEvent, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';
import { ModalProps } from './Modal.props';

export const Modal = ({ show, onClose, children }: ModalProps) => {
  const [isBrowser, setIsBrowser] = useState<boolean>(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (
    e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    e.preventDefault();
    onClose();
  };

  const modalContent: JSX.Element | null = show ? (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <a href='#' onClick={handleClose}>
            {/* <FaTimes /> */}
            <FontAwesomeIcon icon={['fab', 'times']} size='lg' />
          </a>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  ) : null;

  if (isBrowser && modalContent) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root') as HTMLElement
    );
  } else {
    return null;
  }
};
