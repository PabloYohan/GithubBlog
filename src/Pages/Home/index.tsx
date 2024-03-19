import { useContext } from 'react'
import { HomeContext } from '../../contexts/HomeContext'
import { PostSummary } from './components/PostSummary'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import {
  ContentContainer,
  HomeContainer,
  PostsSummaryContainer,
} from './styles'

export function Home() {
  const homeContext = useContext(HomeContext)

  const posts = homeContext.postsSummary

  return (
    <HomeContainer>
      <ContentContainer>
        <Profile />
        <SearchForm />
        <PostsSummaryContainer>
          {posts.map((post) => {
            return <PostSummary key={post.id} data={post} />
          })}
        </PostsSummaryContainer>
      </ContentContainer>
    </HomeContainer>
  )
}
