import axios from 'axios'

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: 'application/vnd.github.v3+json'
  }
})

export const list = async (offset = 0, limit = 12) =>
  client.get('/', {
    params: {
      offset,
      limit
    }
  })

export const getDetails = async (username = '') => client.get(`/${username}`)
