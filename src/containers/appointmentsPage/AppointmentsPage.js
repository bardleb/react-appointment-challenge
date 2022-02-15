import React, { useState } from "react";
import {TileList} from '../../components/tileList/TileList';
import {AppointmentForm} from '../../components/appointmentForm/AppointmentForm';

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleTitle = (e) => {
    setTitle(e.target.value);
  }

  const handleContact = (e) => {
    setContact(e.target.value)
  }

  const handleDate = (e) => {
    setDate(e.target.value);
  }

  const handleTime = (e) => {
    setTime(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleNewApp(title, contact, date, time);
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm contacts={props.contacts} title={title} setTitle={handleTitle} contact={contact} setContact={handleContact} date={date} setDate={handleDate} time={time} setTime={handleTime} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList data={props.app} />
      </section>
    </div>
  );
};
