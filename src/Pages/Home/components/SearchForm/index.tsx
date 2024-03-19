import { useForm } from 'react-hook-form'
import { FormContainer, SearchFormContainer } from './styles'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { HomeContext } from '../../../../contexts/HomeContext'

const SearchFormSchema = z.object({
  query: z.string(),
})

type QueryType = z.infer<typeof SearchFormSchema>

export function SearchForm() {
  const { fetchPosts } = useContext(HomeContext)

  const { handleSubmit, register } = useForm<QueryType>({
    resolver: zodResolver(SearchFormSchema),
  })

  async function handleSearchPosts(data: QueryType) {
    await fetchPosts(data.query)
  }
  return (
    <SearchFormContainer>
      <FormContainer onSubmit={handleSubmit(handleSearchPosts)}>
        <label>Publicações</label>
        <input type="text" placeholder="Buscar Conteúdo" {...register} />
      </FormContainer>
      <span>6 publicações</span>
    </SearchFormContainer>
  )
}
