
'use client';

import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

export default function ToggleModal01(props) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
    <Button size={props.size} style={{marginRight:5}} className='!bg-primary hover:!bg-secondary modalbtn'onClick={() => setOpenModal(true)}>{props.btnName}</Button>
      {/* <Button className='!bg-primary' onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            {/* <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" /> */}
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              {props.message}
              {props.children}
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" className='!bg-primary hover:!bg-secondary' onClick={() => setOpenModal(false)}>
                {props.closeBtn}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
