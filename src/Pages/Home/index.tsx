import { Profile } from './components/Profile'
import { ContentContainer, HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <ContentContainer>
        <Profile></Profile>
      </ContentContainer>
    </HomeContainer>
  )
}
