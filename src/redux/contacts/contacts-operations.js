import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';

const getAllContacts = createAsyncThunk('contacts/getContacts', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {}
});

const addContact = createAsyncThunk('contacts/addContact', async body => {
  try {
    const { data } = await axios.post('/contacts', body);
    return data;
  } catch (error) {}
});

const deleteContact = createAsyncThunk('contacts/deleteContact', async id => {
  try {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
  } catch (error) {}
});
const updateContact = createAsyncThunk('contacts/updateContact', async id => {
  try {
    const { data } = await axios.patch(`/contacts/${id}`);
    return data;
  } catch (error) {}
});
export const getFilterValue = createAction('phonebook/getFilterValue');

const contactsOperations = {
  getAllContacts,
  addContact,
  deleteContact,
  updateContact,
};
export default contactsOperations;
