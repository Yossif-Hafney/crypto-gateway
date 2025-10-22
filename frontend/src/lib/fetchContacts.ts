import { store } from "@/store/store";
import { loadContacts } from "@/store/contactSlice";

export const fetchContactsFromDB = async () => {
  try {
    const response = await fetch("/api/contact");
    const data = await response.json();
    if (data.success && data.contacts) {
      store.dispatch(loadContacts(data.contacts));
      console.log("📦 Loaded contacts from database:", data.contacts.length);
    }
  } catch (error) {
    console.error("Failed to load contacts:", error);
  }
};
