import { HomeProvider } from '../../contexts/HomeContext'
import { PostSummary } from './components/PostSummary'
import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import {
  ContentContainer,
  HomeContainer,
  PostsSummaryContainer,
} from './styles'

export function Home() {
  return (
    <HomeProvider>
      <HomeContainer>
        <ContentContainer>
          <Profile />
          <SearchForm />
          <PostsSummaryContainer>
            <PostSummary />
            <PostSummary />
            <PostSummary />
          </PostsSummaryContainer>
        </ContentContainer>
      </HomeContainer>
    </HomeProvider>
  )
}
