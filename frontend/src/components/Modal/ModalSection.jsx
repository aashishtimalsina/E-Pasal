import React from "react";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import toast from "react-hot-toast";
import OrderDone from "../Order/OrderDone";

const ModalSection = ({cart}) => {
  const [openModal, setOpenModal] = useState(false);
  const [orderDetails, setorderDetails] = useState({
    fullName: "",
    address: "",
    mobile: "",
  });

  function onCloseModal() {
    setOpenModal(false);
    setorderDetails("");
  }
  const handleChange =(event) =>{
    setorderDetails({
         ...orderDetails,[event.target.name]:event.target.value
    });
    console.log(orderDetails)

  } 
  const handleSubmit =(event)=>{
    // event.preventDefault();
    if(!orderDetails.fullName || !orderDetails.address || !orderDetails.mobile){
      return toast.error("All fields must be completed")
    }
    else{
      toast.success("Order Completed");
      onCloseModal();
    }
  }

  return (
    <>
      <div>
        <Button
          className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
          onClick={() => setOpenModal(true)}
        >
          Checkout
        </Button>
        <Modal show={openModal} size="md" onClose={onCloseModal} popup>
          <Modal.Header />
           <h1 className="mx-auto mb-6 text-xl">Please enter your details before paying.</h1>
          <Modal.Body>
            <div className="space-y-6">
              <div>
                <div className="mb-2 block">
                  <Label value="Your Name" />
                </div>
                <TextInput
                  id="fullname"
                  name="fullName"
                  placeholder="Your Full Name"
                  value={orderDetails.fullName}
                  onChange={handleChange}
                  required
                />

              </div>
              <div>
                <div className="mb-2 block">
                  <Label value="Your Address" />
                </div>
                <TextInput
                  id="Address"
                  name="address"
                  placeholder="Your Full Address"
                  value={orderDetails.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label value="Your Mobile Number" />
                </div>
                <TextInput
                  id="PNumber"
                  name="mobile"
                  placeholder="Your Number"
                  value={orderDetails.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full">
                {/* <Button onClick={handleSubmit}>Pay with Esewa</Button> */}
                
                 <OrderDone cart={cart} handleSubmit={handleSubmit}/>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default ModalSection;
