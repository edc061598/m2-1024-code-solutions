import React, { useEffect } from 'react';
import './App.css';

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export function Modal({ isOpen, children, onClose }: Props) {
  // const modal = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modal = document.querySelector('.modal') as HTMLDialogElement;
    if (modal) {
      if (isOpen) {
        modal.showModal();
      } else {
        modal.close();
      }
    }
  }, [isOpen]);

  return (
    <>
      <dialog className="modal" id="modal-dialog" onClose={onClose}>
        {' '}
        {children}
      </dialog>
    </>
  );
}
