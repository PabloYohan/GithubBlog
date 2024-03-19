import { useParams } from 'react-router-dom'
import { PostHeader } from './components/PostHeader/index'
import { BodyContent, PostContent } from './styles'
import { useEffect, useState } from 'react'
import { issuesApi } from '../../libs/axios'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

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

export function Post() {
  const [issueData, setIssueData] = useState<IssueDataType>({
    body: '',
    title: '',
    comments: 0,
    html_url: '',
    created_at: '1970-01-01T00:00:00Z',
    user: { login: '' },
  })

  const params = useParams()

  const fetchIssueData = async (id: number) => {
    const response = await issuesApi.get(`/issues/${id}`)

    console.log(response)

    setIssueData(response.data)
  }

  useEffect(() => {
    fetchIssueData(Number(params.id))
  }, [params.id])

  return (
    <PostContent>
      <main>
        <PostHeader data={issueData} />
        <BodyContent>
          <div>
            <Markdown remarkPlugins={[remarkGfm]}>{issueData.body}</Markdown>
          </div>
        </BodyContent>
      </main>
    </PostContent>
  )
}
