import React, { useEffect } from 'react';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import contactsOperations from 'redux/contacts/contacts-operations';

export default function ContactList() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.userContacts);
  useEffect(() => {
    dispatch(contactsOperations.getAllContacts());
  }, [dispatch]);

  const filterContacts = () => {
    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const contactsArr = filterContacts();
  const handleRemove = id => {
    dispatch(contactsOperations.deleteContact(id));
  };
  return (
    <div className={css.container}>
      <ul className={css.contactsList}>
        {contactsArr?.length > 0 &&
          contactsArr.map(contact => {
            return (
              <li key={contact.id} className={css.contact}>
                {contact.name}: {contact.number}
                <button
                  className={css.deleteButton}
                  onClick={() => handleRemove(contact.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
