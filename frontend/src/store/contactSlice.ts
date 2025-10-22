import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
  isRead?: boolean;
}

interface ContactState {
  items: Contact[];
}

const initialState: ContactState = { items: [] };

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      // Only add if not already present by id (integer from DB)
      const exists = state.items.some(
        (c) => String(c.id) === String(action.payload.id)
      );
      if (!exists) {
        state.items = [
          {
            ...action.payload,
            isRead: false,
          },
          ...state.items,
        ];
      }
    },
    markAsRead: (state, action: PayloadAction<string>) => {
      const contact = state.items.find(
        (c) => String(c.id) === String(action.payload)
      );
      if (contact) {
        contact.isRead = true;
      } else {
        console.warn(`Contact ${action.payload} not found in Redux state`);
      }
    },
    markAllAsRead: (state) => {
      const unreadCount = state.items.filter((c) => !c.isRead).length;
      if (unreadCount === 0) {
        return; // Nothing to update
      }
      state.items.forEach((contact) => {
        contact.isRead = true;
      });
      console.log(`Marked ${unreadCount} contacts as read in Redux`);
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((c) => c.id !== action.payload);
    },
    clearAll: (state) => {
      state.items = [];
    },
    loadContacts: (state, action: PayloadAction<Contact[]>) => {
      // Simply load contacts from database with their isRead status
      // This is only called on initial page mount, not on socket reconnect
      state.items = action.payload.map((contact) => ({
        ...contact,
        isRead: !!contact.isRead, // PostgreSQL returns boolean directly
      }));
    },
  },
});

export const {
  addContact,
  markAsRead,
  markAllAsRead,
  deleteContact,
  clearAll,
  loadContacts,
} = contactSlice.actions;
export default contactSlice.reducer;
