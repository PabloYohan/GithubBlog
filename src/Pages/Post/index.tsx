import { useParams } from 'react-router-dom'

export function Post() {
  const params = useParams()
  console.log(params.id)
  return <h2>Post</h2>
}
