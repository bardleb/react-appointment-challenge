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
      <label>Name</label>
      <input name="name" value={name} onChange={setName} type="text" />

      <label>Email</label>
      <input name="email" value={email} onChange={setEmail}  type="text" />

      <label>Phone</label>
      <input name="phone" value={phone} onChange={setPhone}  type="text" />

      <button type="submit">Submit Form</button>

    </form>
  );
};
