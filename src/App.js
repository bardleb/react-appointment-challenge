import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contact, setContacts] = useState([]);
  const [app, setApp] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const handleNewContact = (name, email, phone) => {
    
    const newContact = {
      name: name,
      email: email, 
      phone: phone
    };

    setContacts(prev => {
      return [...prev, newContact];
    });
  }

  const handleNewApp = (title, contact, date, time) => {
    const newApp = {
      title: title, 
      contact: contact, 
      date: date, 
      time: time
    }

    setApp(prev => {
      return [...prev, newApp];
    }); 
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage contacts={contact} handleNewContact={handleNewContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage contacts={contact} app={app} handleNewApp={handleNewApp} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
