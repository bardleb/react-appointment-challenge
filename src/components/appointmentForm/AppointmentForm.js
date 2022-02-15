import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input name="title" value={title} onChange={setTitle} type="text" />

      <label>Date</label>
      <input name="date" min={getTodayString} value={date} onChange={setDate} type="date" />

      <label>Time</label>
      <input name="time" value={time} onChange={setTime} type="time" />

      <ContactPicker contacts={contacts} setContact={setContact} />

      <button type="submit">Submit</button>
    </form>
  );
};
