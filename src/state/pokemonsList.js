import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { list } from 'lib/api'

export const getList = createAsyncThunk(
  'users/fetchUsersList',
  async (page, { rejectWithValue }) => {
    try {
      const {
        data: { count, next, previous, results }
      } = await list()
      return {
        count,
        next,
        previous,
        results
      }
    } catch (error) {
      return rejectWithValue('Ocorreu um erro ao tentar realizar a requisição')
    }
  }
)

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState: {
    count: null,
    data: [],
    next: null,
    previous: null,
    loading: false,
    error: null
  },
  extraReducers: {
    [getList.pending]: state => {
      state.loading = true
      state.error = false
    },
    [getList.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.data = payload.results
      state.next = !!payload.next
      state.previous = !!payload.previous
      state.count = payload.count
    },
    [getList.rejected]: (state, action) => {
      state.next = null
      state.previous = null
      state.loading = false
      state.error = true
      state.data = action.payload
    }
  }
})

export default pokemonsSlice.reducer
