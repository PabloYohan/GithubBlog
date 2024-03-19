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
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

interface User {
  login: string
}
interface IssueDataType {
  body: string
  title: string
  comments: number
  html_url: string
  created_at: string
  user: User
}
interface PostHeaderProps {
  data: IssueDataType
}
export function PostHeader({ data }: PostHeaderProps) {
  console.log(data)

  const createdDiference = formatDistanceToNow(new Date(data.created_at), {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <PostHeaderContainer>
      <PostLinks>
        <NavLink to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>VOLTAR</span>
        </NavLink>
        <a href={data.html_url} target="_blank" rel="noreferrer">
          <span>VER NO GITHUB</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </PostLinks>
      <PostTitle>{data.title}</PostTitle>
      <PostInfomation>
        <div>
          <FontAwesomeIcon icon={faGithub} />
          <span>{data.user.login}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendar} />
          <span>{createdDiference}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} />
          <span>{data.comments} comentários</span>
        </div>
      </PostInfomation>
    </PostHeaderContainer>
  )
}
