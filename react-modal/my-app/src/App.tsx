import { useState } from 'react';
import './App.css';
import { Modal } from './Modal';

export function App() {
  const [isOpen, setIsOpen] = useState(false);

  function openDialog() {
    setIsOpen(true);
  }

  function cancelClick() {
    setIsOpen(false);
  }

  function deleteClick() {
    alert('Something got deleted!');
    cancelClick();
  }

  return (
    <>
      <button type="button" onClick={openDialog}>
        Delete Me!
      </button>
      <Modal isOpen={isOpen} onClose={cancelClick}>
        <button type="button" onClick={deleteClick}>
          {' '}
          Delete
        </button>
        <button type="button" onClick={cancelClick}>
          {' '}
          Cancel
        </button>
      </Modal>
    </>
  );
}

export default App;
