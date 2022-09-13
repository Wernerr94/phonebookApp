import React, { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from 'redux/contacts/contacts-operations';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts.userContacts);
  const dispatch = useDispatch();
  const reset = () => {
    setName('');
    setNumber('');
  };
  const handleChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    }
    if (e.target.name === 'number') {
      setNumber(e.target.value);
    }
  };
  const submitHandler = e => {
    e.preventDefault();
    let newContact = contacts.find(item => item.name === name);
    if (newContact) {
      alert(`${name} is already in contacts.`);
      return;
    } else {
      dispatch(contactsOperations.addContact({ name, number }));
      dispatch(contactsOperations.getAllContacts());
    }
    reset();
  };
  return (
    <div className={css.wrapper}>
      <h2>Add new Contact</h2>

      <form onSubmit={submitHandler} className={css.form}>
        <label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Name"
            onChange={handleChange}
            value={name}
          />
        </label>
        <label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Number"
            onChange={handleChange}
            value={number}
          />
        </label>
        <button type="submit" className={css.submit}>
          Add
        </button>
      </form>
    </div>
  );
}
