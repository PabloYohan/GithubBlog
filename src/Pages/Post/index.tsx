import { useParams } from 'react-router-dom'
import { PostHeader } from './components/PostHeader/index'
import { PostContent } from './styles'

export function Post() {
  const params = useParams()
  console.log(params.id)
  return (
    <PostContent>
      <main>
        <PostHeader />
      </main>
    </PostContent>
  )
}
