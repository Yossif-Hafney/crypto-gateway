import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactReducer from "./contactSlice";
import merchantReducer from "./merchantSlice";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const contactPersistConfig = { key: "contacts", storage };
const merchantPersistConfig = { key: "merchants", storage };

const persistedContactReducer = persistReducer(
  contactPersistConfig,
  contactReducer
);
const persistedMerchantReducer = persistReducer(
  merchantPersistConfig,
  merchantReducer
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactReducer,
    merchants: persistedMerchantReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
