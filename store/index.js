import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../store/contacts/contactSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
