
'use client';

import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function ToggleModal01(props) {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const handleAccept = () => {
    // Make a request to your Django API to update the orderStatus to 'Accepted'
    // You'll need to replace '/api-url/' with the actual URL of your API
    fetch(`http://localhost:8000/order-details/${props.orderID}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        orderDate: props.orderDate,
        RequestedPackages: props.RequestedPackages,
        total: props.total,
        orderStatus: 'Accepted',
      }),
    })
      .then(response => response.json())
      .then(data => {
        navigate(0)
        console.log(data);
      });

    setOpenModal(false);
  };

  const handleReject = () => {
    // Make a request to your Django API to update the orderStatus to 'Rejected'
    // You'll need to replace '/api-url/' with the actual URL of your API
    fetch(`http://localhost:8000/order-details/${props.orderID}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        orderDate: props.orderDate,
        RequestedPackages: props.RequestedPackages,
        total: props.total,
        orderStatus: 'Rejected',
      }),
    })
      .then(response => response.json())
      .then(data => {
        navigate(0)
        console.log(data);
      });

    setOpenModal(false);
  };



  return (
    <>
      <Button size={props.size} style={{ marginRight: 5 }} className='!bg-primary hover:!bg-secondary modalbtn' onClick={() => setOpenModal(true)}>{props.btnName}</Button>
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
              {props.message && (
                <>
                  <Button color="failure" className='!bg-primary hover:!bg-secondary' onClick={handleAccept}>
                    {props.closeBtn}
                  </Button>
                  <Button color="failure" className='!bg-primary hover:!bg-secondary' onClick={handleReject}>
                    {props.cancelBtn}
                  </Button>
                </>
              )}

              {/* {props.message !== null && (
                <>
                  <Button color="failure" className='!bg-primary hover:!bg-secondary' onClick={() => setOpenModal(false)}>
                    {props.closeBtn}
                  </Button>
                 
                </>
              )} */}



            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
