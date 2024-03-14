import styled from 'styled-components'

export const PostSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 26rem;
  height: 16.5rem;
  border-radius: 10px;
  padding: 2rem;
  background-color: ${(props) => props.theme['base-post']};

  p {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
    line-height: 1.6;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  gap: 1rem;
  h3 {
    width: 17.75rem;
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1.6;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    font-size: 0.8rem;
    line-height: 1.6;
    font-weight: normal;
    color: ${(props) => props.theme['base-span']};
    margin-top: 0.315rem;
  }
`
