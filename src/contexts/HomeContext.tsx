import { ReactNode, createContext, useEffect, useState } from 'react'
import { issuesApi, userApi } from '../libs/axios'

interface GithubInfoProps {
  login: string
  bio: string | null
  company: string | null
  followers: number
  html_url: string
  name: string
  avatar_url: string
}

interface PostSummaryProps {
  title: string
  body: string
  created_at: string
  id: number
}

interface HomeContextType {
  githubInfos: GithubInfoProps
  postsSummary: PostSummaryProps[]
  fetchPosts: (query?: string) => Promise<void>
}

interface HomeProviderProps {
  children: ReactNode
}

export const HomeContext = createContext({} as HomeContextType)

export function HomeProvider({ children }: HomeProviderProps) {
  const [githubInfos, setGithubInfos] = useState<GithubInfoProps>({
    login: 'PabloYohan',
    bio: null,
    company: null,
    followers: 0,
    html_url: 'https://github.com/PabloYohan',
    name: 'Pablo Yohan',
    avatar_url: 'https://avatars.githubusercontent.com/u/91166559?v=4',
  })

  const [postsSummary, setPostsSummary] = useState<PostSummaryProps[]>([])

  const fetchGithubInfos = async () => {
    const response = await userApi.get('/PabloYohan')

    setGithubInfos(response.data)
  }

  const fetchPosts = async (query?: string) => {
    const response = await issuesApi.get('/issues', {
      params: {
        q: `${query}repo:PabloYohan/GithubBlog`,
      },
    })

    setPostsSummary(response.data.items)
  }

  useEffect(() => {
    fetchGithubInfos()
    fetchPosts('')
  }, [])

  return (
    <HomeContext.Provider value={{ githubInfos, postsSummary, fetchPosts }}>
      {children}
    </HomeContext.Provider>
  )
}
