import React from 'react';

function Modal(props) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={props.onClose}>Close</button>
        <p>This is the modal content.</p>
      </div>
    </div>
  );
}

export default Modal;