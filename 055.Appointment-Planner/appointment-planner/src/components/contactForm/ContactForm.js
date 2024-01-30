import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name:</label>
      <input type='text' id='name' name='user-name' value={name} required onChange={(e) => setName(e.target.value)} />
      <label htmlFor=''>Phone:</label>
      <input type='phone' id='phone' name='user-phone' value={phone} required onChange={(e) => setPhone(e.target.value)} pattern='^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$' />
      <label htmlFor='email'>Email:</label>
      <input type='email' id='email' name='user-email' value={email} required onChange={(e) => setEmail(e.target.value)} />
      <button type='submit'>Save</button>
    </form>
  );
};

