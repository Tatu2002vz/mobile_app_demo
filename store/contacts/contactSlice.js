import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: [],
};
export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    getContact: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const selectContacts = state => state.contact.value;
export const {getContact} = contactSlice.actions;
export default contactSlice.reducer;
