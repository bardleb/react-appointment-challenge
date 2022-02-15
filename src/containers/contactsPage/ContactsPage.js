import React, { useState } from "react";
import {ContactForm} from '../../components/contactForm/ContactForm';
import {TileList} from '../../components/tileList/TileList';
export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handlePhone = (e) => {
    setPhone(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.contacts.includes(name)) {

    } else {
      props.handleNewContact(name, phone, email);
      setEmail('');
      setPhone('');
      setName('');  
    }

  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */


  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm name={name} setName={handleName} phone={phone} setPhone={handlePhone} email={email} setEmail={handleEmail} handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={props.contacts} />
        
      </section>
    </div>
  );
};
