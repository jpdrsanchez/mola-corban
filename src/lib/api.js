import axios from 'axios'

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Accept: 'application/vnd.github.v3+json'
  }
})

export const listUsers = async (per_page = 10, since = 0) =>
  client.get('users', {
    params: {
      per_page,
      since
    }
  })

export const getUser = async (username = '') => client.get(`users/${username}`)
