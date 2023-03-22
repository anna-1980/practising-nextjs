import { createSlice } from '@reduxjs/toolkit';
import type {PayloadAction } from '@reduxjs/toolkit';

import { Pokemon } from '@/types';

export interface SearcState {
    search: string;
    startupPokemon: Pokemon[];
}

const initialState: SearcState = {
    search: "",
    startupPokemon: [],
};

const searcSlice = createSlice({
    name: 'search',
    initialState, 
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        }, 
        setStartupPokemon: (state, action: PayloadAction<Pokemon[]>) => {
            state.startupPokemon = action.payload;
        },  
    },
});

export const { setSearch, setStartupPokemon } = searcSlice.actions;
export default searcSlice.reducer;