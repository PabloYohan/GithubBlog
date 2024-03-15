import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  LinkContainer,
  PostHeaderContainer,
  PostInfomation,
  PostLinks,
  PostTitle,
} from './styles'
import {
  faArrowUpRightFromSquare,
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function PostHeader() {
  return (
    <PostHeaderContainer>
      <PostLinks>
        <LinkContainer href="#">
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>VOLTAR</span>
        </LinkContainer>
        <LinkContainer href="#">
          <span>VER NO GITHUB</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </LinkContainer>
      </PostLinks>
      <PostTitle>JavaScript data types and data structures</PostTitle>
      <PostInfomation>
        <div>
          <FontAwesomeIcon icon={faGithub} />
          <span>PabloYohan</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendar} />
          <span>Há 1 dia</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} />
          <span>5 comentários</span>
        </div>
      </PostInfomation>
    </PostHeaderContainer>
  )
}
