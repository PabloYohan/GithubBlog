import styled from 'styled-components'

export const MainCotainer = styled.div`
  position: relative;
  a {
    position: absolute;
    display: flex;
    top: 2.5rem;
    right: 2rem;
    text-decoration: none;
    font-size: 0.75rem;
    color: ${(props) => props.theme.blue};
    gap: 0.5rem;
    font-weight: bold;
    align-items: center;
  }
`

export const ProfileContainer = styled.div`
  display: flex;
  height: 13.25rem;
  background-color: ${(props) => props.theme['base-profile']};
  filter: drop-shadow(0 2px 28px rgba(0, 0, 0, 0.2));
  border-radius: 10px;
  padding: 2rem;
  gap: 2rem;

  img {
    border-radius: 8px;
    height: 9.25rem;
    width: 9.25rem;
  }
`

export const UserSummary = styled.div`
  display: flex;
  padding-top: 0.5rem;
  flex-direction: column;
  gap: 0.5rem;
  h1 {
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
    font-weight: bold;
  }
  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
    min-height: 3.25rem;
  }
`
export const UserInformation = styled.div`
  color: ${(props) => props.theme['base-subtitle']};
  display: flex;
  gap: 1.5rem;
  font-size: 1rem;
  margin-top: 1rem;

  div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  svg {
    color: ${(props) => props.theme['base-label']};
  }
`
