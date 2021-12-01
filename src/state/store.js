import { configureStore } from '@reduxjs/toolkit'
import pokemonDetailsReducer from './pokemonDetails'
import pokemonReducer from './pokemonsList'

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    details: pokemonDetailsReducer
  }
})
