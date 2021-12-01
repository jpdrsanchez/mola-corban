import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getDetails } from 'lib/api'

export const getPokemonDetails = createAsyncThunk(
  'users/pokemonDetails',
  async (name = '', { rejectWithValue }) => {
    try {
      if (!name.length) throw Error('Nenhum nome fornecido')
      const { data } = await getDetails(name)
      return data
    } catch (error) {
      return rejectWithValue('Ocorreu um erro ao tentar realizar a requisição')
    }
  }
)

const pokemonDetailsSlice = createSlice({
  name: 'pokemonDetails',
  initialState: {
    data: null,
    loading: false,
    error: null
  },
  extraReducers: {
    [getPokemonDetails.pending]: state => {
      state.loading = true
      state.error = null
    },
    [getPokemonDetails.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.data = payload
    },
    [getPokemonDetails.rejected]: (state, action) => {
      state.data = action.payload
      state.loading = false
      state.error = true
    }
  }
})

export default pokemonDetailsSlice.reducer
