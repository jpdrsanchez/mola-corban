import { configureStore } from '@reduxjs/toolkit'
import pokemonReducer from './pokemonsList'

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer
  }
})
