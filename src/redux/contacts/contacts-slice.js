import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contacts-operations';
import { getFilterValue } from './contacts-operations';

const initialState = {
  userContacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsOperations.getAllContacts.fulfilled]: (state, { payload }) => {
      state.userContacts = payload;
    },
    [contactsOperations.deleteContact.fulfilled]: (state, { meta }) => {
      state.userContacts = state.userContacts.filter(
        contact => contact.id !== meta.arg
      );
    },
    [getFilterValue]: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export default contactsSlice.reducer;
