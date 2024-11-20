import styled from "styled-components";

export const PostContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PostHeader = styled.header`
display: flex;
flex-direction: column;
justify-content: center;
gap: .5rem;
padding: 2rem;
margin-top: -5.5rem;

background: ${props => props.theme['base-profile']};

position: relative;
z-index: 2;

width: 54rem;

border-radius: 10px;

& a {
  display: flex;
  gap: .5rem;
  align-items: center;
  max-width: fit-content;
  
  text-decoration: none;
  font: 700 0.75rem/1.3 "Nunito", sans-serif;
  color: ${props => props.theme['blue']};
  border-bottom: 1px solid transparent;
  text-transform: uppercase;
  
  transition: all .2s ease-in-out; 
  cursor: pointer;
  
  & svg {
    fill: ${props => props.theme['blue']};
    margin-bottom: 4px;
  }
  
  &:hover {
    border-bottom: 1px solid ${props => props.theme['blue']};
  }
}

& h2 {
   font: 700 1.5rem/1.3 'Nunito', sans-serif;
   color: ${props => props.theme['base-title']};
  }

& > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

& ul {
  display: flex;
  gap: 1.5rem;
  align-items: center;

  & li {
    display: flex;
    align-items: center;
    gap: .5rem;

    font: 400 1rem/1.6 'Nunito', sans-serif;
    color: ${props => props.theme['base-subtitle']};

    & svg path {
      fill: ${props => props.theme['base-label']}
    }

  }
 }
`

export const MarkdownContainer = styled.div`
  padding: 2rem;
  font-family: 'Nunito', sans-serif;
  color: ${props => props.theme['base-text']};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  width: 54rem;

  h1, h2, h3 {
    font-weight: 700;
    color: ${props => props.theme['base-title']};
  }

  p {
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  a {
    color: ${props => props.theme['blue']};
    text-decoration: none;
    font-weight: bold;
    
    &:hover {
      text-decoration: underline;
    }
  }

  code {
    color: ${props => props.theme['base-text']};
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-size: 0.9rem;
  }

  pre {
    background: ${props => props.theme['base-post']};
    color: ${props => props.theme['base-label']};
    padding: 1rem;
    border-radius: 8px;
    overflow-x: auto;
    font-size: 0.9rem;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  blockquote {
  background-color: ${props => props.theme['base-input']};
  border-left: 3px solid ${props => props.theme['base-text']};
  font-style: italic;
  
  & p {
    margin: 0 1rem;
  }
}
`;
