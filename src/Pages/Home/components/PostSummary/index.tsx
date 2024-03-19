import { formatDistanceToNow } from 'date-fns'
import { PostSummaryContainer, TitleContainer } from './styles'
import Markdown from 'react-markdown'
import { ptBR } from 'date-fns/locale/pt-BR'

interface PostSummaryType {
  title: string
  body: string
  created_at: string
  number: number
}

interface PostSummaryProps {
  data: PostSummaryType
}

export function PostSummary({ data }: PostSummaryProps) {
  const createdDiference = formatDistanceToNow(new Date(data.created_at), {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <PostSummaryContainer to={`/post/${data.number}`}>
      <TitleContainer>
        <h3>{data.title}</h3>
        <span>{createdDiference}</span>
      </TitleContainer>
      <span>
        <Markdown>{data.body}</Markdown>
      </span>
    </PostSummaryContainer>
  )
}
