import styled from 'styled-components'

export const SearchFormContainer = styled.div`
  position: relative;
  margin-top: 4.5rem;
  span {
    position: absolute;
    top: 0.25rem;
    right: 0;
    font-size: 0.8rem;
    color: ${(props) => props.theme['base-span']};
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  label {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
  }

  input {
    border-radius: 6px;
    height: 3.125rem;
    border: 1px solid ${(props) => props.theme['base-border']};
    background-color: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-title']};
    padding: 0.75rem 1rem;

    ::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
