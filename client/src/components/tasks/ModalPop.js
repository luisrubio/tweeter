import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalPop = props => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  let box;
  if (props.data.completed) {
    box = (
      <div className="box green text-center">
        <h3 class="m-title">{props.name}</h3>
        <div class="text-center">
          <i class="fas fa-user"></i>
        </div>
        <button className="btn btn-lg btn-info" disable="true">
          Completed!
        </button>
      </div>
    );
  } else {
    box = (
      <div className="box text-center">
        <h3 class="m-title">{props.name}</h3>
        <div class="text-center">
          <i class="fas fa-user"></i>
        </div>

        <Button color="btn btn-lg btn-info" onClick={toggle}>
          Finish Task <i class="fas fa-caret-right"></i>
        </Button>

        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" className="btn-lg" onClick={toggle}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                props.onClick();
                // toggle();
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
