import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useForm } from "react-hook-form";
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  modalWrapper: {
    zIndex: '1000'
  }
};

Modal.setAppElement('#root');

function NutoModal({openModal, modalIsOpen, closeModal, title}) {
  const [bookingDate, setBookingDate] = useState(new Date());
  const userData =  localStorage.getItem("nuto-user");
  const parsedData = JSON.parse(userData);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    const bookingDateString = bookingDate.toDateString();
    const bookingDetails = {
      ...data
    }
    bookingDetails.date = bookingDateString;
    fetch('https://damp-basin-39861.herokuapp.com/booking', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(bookingDetails)
    })
    .then((response) => response.json())
    .then((json) => {
      closeModal();
    });
  }

  const bookingDateHander = (bookingDate) => {
    setBookingDate(bookingDate);
  }

  return (
    <div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      {
        parsedData?.email ?
        (<div style={customStyles.modalWrapper}><h2>Booking</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Calendar
                onChange={bookingDateHander}
                value={bookingDate}
              />
            </div>
            <div className="col-md-6">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={parsedData.name} placeholder="Name" type="text" {...register("name")} />
                {errors.name && <span>This field is required</span>}

                <input defaultValue={parsedData.email} placeholder="Email" type="email" {...register("email")} />
                {errors.email && <span>This field is required</span>}
                <input type="hidden"{...register("time")} value="1 hour" />
                <input type="hidden" {...register("price")} value="$384" />
                <input type="submit" />
                <p>Your are Booking -Programe- for -1- hour by -$537-</p>
              </form>
            </div>
          </div>
        </div>
        </div>) :
        <p><Link to="/login"> Your Need Login To Book An Appointment</Link></p>
      }
      </Modal>
    </div>
  );
}

export default NutoModal;