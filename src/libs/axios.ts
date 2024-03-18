import axios from 'axios'

export const issuesApi = axios.create({
  baseURL: 'https://api.github.com/search',
})

export const userApi = axios.create({
  baseURL: 'https://api.github.com/users',
})
