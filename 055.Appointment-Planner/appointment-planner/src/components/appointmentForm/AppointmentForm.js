import React from "react";
import {ContactPicker} from '../contactPicker/ContactPicker';

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

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

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input type='text' id='title' name='appointment-title' value={title} required onChange={(e) => {setTitle(e.target.value)}} />
      <label htmlFor='date'>Date:</label>
      <input type='date' id='date' name='appointment-date' value={date} required onChange={(e) => {setDate(e.target.value)}} min={getTodayString()} />
      <label htmlFor='time'>Time:</label>
      <input type='time' id='time' name='appointment-time' value={time} required onChange={(e) => {setTime(e.target.value)}} />
      <ContactPicker contacts={contacts} name='appointment-contact' value={contact} onChange={(e) => {setContact(e.target.value)}} />
      <button type='submit'>Save</button>
    </form>
  );
};
