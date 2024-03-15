import styled from 'styled-components'

export const PostHeaderContainer = styled.div`
  display: flex;
  height: 10.5rem;
  background-color: ${(props) => props.theme['base-profile']};
  filter: drop-shadow(0 2px 28px rgba(0, 0, 0, 0.2));
  border-radius: 10px;
  padding: 2rem;
  gap: 0.5rem;
  flex-direction: column;
`

export const PostLinks = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PostTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme['base-title']};
  margin-top: 0.75rem;
`

export const LinkContainer = styled.a`
  text-decoration: none;
  display: flex;
  color: ${(props) => props.theme.blue};
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  font-weight: bold;
`

export const PostInfomation = styled.div`
  display: flex;
  gap: 2rem;

  div {
    color: ${(props) => props.theme['base-span']};
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`
