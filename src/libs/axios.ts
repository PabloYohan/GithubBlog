import axios from 'axios'

export const issuesSearchApi = axios.create({
  baseURL: 'https://api.github.com/search',
})

export const userApi = axios.create({
  baseURL: 'https://api.github.com/users',
})

export const issuesApi = axios.create({
  baseURL: 'https://api.github.com/repos/PabloYohan/GithubBlog',
})
