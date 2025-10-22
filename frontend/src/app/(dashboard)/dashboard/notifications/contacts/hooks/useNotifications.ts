import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { RootState } from "@/store/store";
import { markAsRead } from "@/store/contactSlice";
import { fetchContactsFromDB } from "@/lib/fetchContacts";
import { updateContactReadStatus } from "@/lib/updateContactStatus";

export const useNotifications = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state: RootState) => state.contacts.items);

  // Load contacts from database on mount
  useEffect(() => {
    fetchContactsFromDB();
  }, []);

  const handleMarkAsRead = async (id: string) => {
    // 1. Optimistically update Redux first (instant UI feedback)
    dispatch(markAsRead(id));

    // 2. Then update database in background
    try {
      const success = await updateContactReadStatus(id, true);
      if (!success) {
        console.error("Failed to update database for contact:", id);
      }
    } catch (error) {
      console.error("Error updating contact read status:", error);
    }
  };

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return {
    notifications,
    unreadCount,
    handleMarkAsRead,
  };
};
