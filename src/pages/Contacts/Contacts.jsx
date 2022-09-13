import React from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/FIlter/Filter';
import ContactList from 'components/ContactList/ContactList';

export default function Contacts() {
  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}
