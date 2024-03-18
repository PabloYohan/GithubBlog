import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  UserSummary,
  ProfileContainer,
  UserInformation,
  MainCotainer,
} from './styles'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useContext } from 'react'
import { HomeContext } from '../../../../contexts/HomeContext'

export function Profile() {
  const homeContext = useContext(HomeContext)

  const githubInfos = homeContext.githubInfos

  return (
    <MainCotainer>
      <ProfileContainer>
        <img src={githubInfos.avatar_url} alt="" />
        <UserSummary>
          <h1>{githubInfos.name}</h1>
          <p>{githubInfos.bio}</p>
          <UserInformation>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <span>{githubInfos.login}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{githubInfos.company}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>{githubInfos.followers} Seguidores</span>
            </div>
          </UserInformation>
        </UserSummary>
      </ProfileContainer>
      <a href={githubInfos.html_url} target="_blank" rel="noreferrer">
        <span>GITHUB</span>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </a>
    </MainCotainer>
  )
}
