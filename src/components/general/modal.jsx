import React, { createRef, useEffect } from 'react';
import bootstrap from 'bootstrap/dist/js/bootstrap.js';
import Button from '../controls/buttons/button';

const Modal = ({title, children, show}) => {
  const modalRef = createRef();

  useEffect(() => {
    const modal = bootstrap.Modal.getOrCreateInstance(modalRef.current);
    if (show) {
      modal.show();
    }
    else {
      modal.hide();
    }

  }, [show]);

  return (
    <>
      <div className="modal" tabIndex="-1" id='modal' ref={modalRef} >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {children}
            </div>
            <div className="modal-footer">
              <Button className="btn btn-secondary" data-bs-dismiss="modal" label='Close'></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
export default Modal;

