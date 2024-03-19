import styled from 'styled-components'

export const PostContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -5.5rem;
  main {
    width: 54rem;
  }
`

export const BodyContent = styled.div`
  padding: 2.5rem 2rem;
  max-width: 864px;
  width: 100%;
  white-space: pre-wrap;
  overflow: hidden;
  div {
    p,
    ul {
      color: ${(props) => props.theme['base-text']};
    }

    overflow-x: auto;
    width: 100%;
    height: 100%;

    ::-webkit-scrollbar {
      width: 10px;
      height: 8px;
    }

    ::-webkit-scrollbar-track {
      background: ${(props) => props.theme['base-profile']};
    }

    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.blue};
    }

    h3,
    h2 {
      color: ${(props) => props.theme.blue};
    }

    a {
      text-decoration: none;
      background: transparent;
      color: ${(props) => props.theme.blue};

      &:hover {
        transition: border 2s;
        border-bottom: 2px solid ${(props) => props.theme.blue};
      }
    }

    img {
      max-width: 100%;
    }
  }
`
