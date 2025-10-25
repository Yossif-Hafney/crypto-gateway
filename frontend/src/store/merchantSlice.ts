import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Merchant {
  id: string;
  name: string;
  email: string;
  companyName: string;
  timestamp: string;
}

interface MerchantState {
  items: Merchant[];
}

const initialState: MerchantState = { items: [] };

const merchantSlice = createSlice({
  name: "merchants",
  initialState,
  reducers: {
    addMerchant: (state, action: PayloadAction<Merchant>) => {
      // Only add if not already present by id
      const exists = state.items.some(
        (m) => String(m.id) === String(action.payload.id)
      );
      if (!exists) {
        state.items = [action.payload, ...state.items];
      }
    },
    loadMerchants: (state, action: PayloadAction<Merchant[]>) => {
      state.items = action.payload;
    },
  },
});

export const { addMerchant, loadMerchants } = merchantSlice.actions;
export default merchantSlice.reducer;
