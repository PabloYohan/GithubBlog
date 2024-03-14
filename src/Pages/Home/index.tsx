import { PostSummary } from './components/PostSummary'
import { Profile } from './components/Profile'
import {
  ContentContainer,
  HomeContainer,
  PostsSummaryContainer,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <ContentContainer>
        <Profile></Profile>

        <PostsSummaryContainer>
          <PostSummary></PostSummary>
          <PostSummary></PostSummary>
          <PostSummary></PostSummary>
        </PostsSummaryContainer>
      </ContentContainer>
    </HomeContainer>
  )
}
