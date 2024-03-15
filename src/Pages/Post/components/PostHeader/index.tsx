import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
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
import { NavLink } from 'react-router-dom'

export function PostHeader() {
  return (
    <PostHeaderContainer>
      <PostLinks>
        <NavLink to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>VOLTAR</span>
        </NavLink>
        <a href="#">
          <span>VER NO GITHUB</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
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
