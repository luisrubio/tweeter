import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalPop = props => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  let box;
  if (props.data.completed) {
    box = (
      <div className="box green text-center">
        <h3 className="m-title">{props.name}</h3>
        <h5>Completed!</h5>
      </div>
    );
  } else {
    box = (
      <div className="box text-center">
        <h3 className="m-title">{props.name}</h3>

        <Button color="btn btn-lg btn-primary" onClick={toggle}>
          <i className="fas fa-check"></i> mark task
        </Button>

        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}></ModalHeader>
          <ModalBody>Mark to confirm task.</ModalBody>
          <ModalFooter>
            <Button color="secondary" className="btn-lg" onClick={toggle}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                props.onClick();
                toggle();
              }}
              className="btn-lg"
              color="primary"
            >
              I am done with this task
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
  return (
    <div className="col-sm-4 p-1">
      {box}
      <div></div>
    </div>
  );
};

export default ModalPop;
