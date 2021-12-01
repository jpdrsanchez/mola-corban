import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { listUsers } from 'lib/api'
import { getNextPage } from 'lib/utils'

export const getUsersList = createAsyncThunk(
  'users/fetchUsersList',
  async (page, { rejectWithValue }) => {
    try {
      const {
        data,
        headers: { link }
      } = await listUsers()
      console.log(getNextPage(link))
      return {
        data,
        link
      }
    } catch (error) {
      return rejectWithValue('Ocorreu um erro ao tentar realizar a requisição')
    }
  }
)

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    nextPage: null,
    loading: false,
    error: null
  },
  extraReducers: {
    [getUsersList.pending]: state => {
      state.loading = true
      state.error = false
    },
    [getUsersList.fulfilled]: (state, action) => {
      state.loading = false
      state.data = action.payload
    },
    [getUsersList.rejected]: (state, action) => {
      console.log(action.payload)
      state.loading = false
      state.error = true
      state.data = action.payload
    }
  }
})

export default usersSlice.reducer
