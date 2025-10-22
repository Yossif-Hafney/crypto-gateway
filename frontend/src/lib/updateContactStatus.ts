/**
 * Update a single contact's read status in the database
 */
export const updateContactReadStatus = async (
  id: string,
  isRead: boolean
): Promise<boolean> => {
  try {
    const response = await fetch(`/api/contact/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isRead }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error(`Failed to update contact ${id}:`, error);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Failed to update contact read status:", error);
    return false;
  }
};

/**
 * Update multiple contacts' read status in the database
 */
export const updateMultipleContactsReadStatus = async (
  contactIds: string[],
  isRead: boolean
): Promise<boolean> => {
  try {
    if (contactIds.length === 0) {
      return true; // Nothing to update
    }

    const results = await Promise.all(
      contactIds.map((id) => updateContactReadStatus(id, isRead))
    );

    // Return true if all updates succeeded
    return results.every((result) => result === true);
  } catch (error) {
    console.error("Failed to update multiple contacts:", error);
    return false;
  }
};
