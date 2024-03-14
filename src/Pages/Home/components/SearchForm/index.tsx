import { FormContainer, SearchFormContainer } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <FormContainer>
        <label>Publicações</label>
        <input type="text" placeholder="Buscar Conteúdo" />
      </FormContainer>
      <span>6 publicações</span>
    </SearchFormContainer>
  )
}
