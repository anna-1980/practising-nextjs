import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "./pokemonApi";

import searchReducer from "./searchSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    pokemonApi: pokemonApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(pokemonApi.middleware);
  },
});

// Ract Redux it Typed but it doesn't know the Schema for Store so we need to give it

//total state of the Store
export type RootState = ReturnType<typeof store.getState>;
// type of dispatch automatically created for us
export type AppDispatch = typeof store.dispatch;
