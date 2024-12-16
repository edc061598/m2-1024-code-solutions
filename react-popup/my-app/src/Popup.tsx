import React from 'react';
import './Popup.css';
import { createPortal } from 'react-dom';

type Props = {
  isOpen: boolean;
  positionTo: HTMLElement | null;
  onClose: () => void;
  children: React.ReactNode;
  opacity: number;
};
export function Popup({
  isOpen,
  positionTo,
  onClose,
  children,
  opacity = 1,
}: Props) {
  if (!isOpen) return null;

  const r = positionTo ? positionTo.getBoundingClientRect() : null;

  const top = r ? r.top + r.height : '50%';
  const left = r ? r.left + r.width / 2 : '50%';

  const menuContent = (
    <>
      <div className="shade" onClick={onClose} style={{ opacity }}></div>

      <div className="popup popup-menu " style={{ top, left }}>
        {children}
      </div>
    </>
  );
  return createPortal(menuContent, document.body);
}
