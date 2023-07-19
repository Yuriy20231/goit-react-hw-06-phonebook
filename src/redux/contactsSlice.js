import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    contacts: [{ id: nanoid(), name: 'Rosie Simpson', number: '459-12-56'}]
}

const contactsSlice = createSlice({
    name : 'contacts',
    initialState,
    reducers:{
        addContact:(state,action) => {
            if (state.contacts.find(el => el.name === action.payload.name)){
                alert(`${action.payload.name} is already in contacts`);
                return;
            }
            

            state.contacts.push(action.payload);
        },
        deleteContact:(state, action) =>{
            const idx = state.contacts.findIndex(contact => contact.id === action.payload);
            state.contacts.splice(idx, 1)

        },

    }

});
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

