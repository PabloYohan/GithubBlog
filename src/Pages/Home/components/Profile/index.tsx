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

export function Profile() {
  return (
    <MainCotainer>
      <ProfileContainer>
        <img src="https://github.com/PabloYohan.png" alt="" />
        <UserSummary>
          <h1>Pablo Yohan</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
            molestiae accusamus deserunt illo dolorum, rem quia soluta atque in
          </p>
          <UserInformation>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <span>PabloYohan</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <span>Embraer</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>32 Seguidores</span>
            </div>
          </UserInformation>
        </UserSummary>
      </ProfileContainer>
      <a href="#">
        <span>GITHUB</span>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </a>
    </MainCotainer>
  )
}
