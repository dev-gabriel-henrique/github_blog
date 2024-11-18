import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 2rem;
  
  width: 26rem;
  height: 16.25rem;
  
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  background: ${props => props.theme['base-post']};
  border-radius: 10px;
  cursor: pointer;

  transition: box-shadow .2s ease-in-out;

  & p {
    width: 22rem;
    font: 400 1rem/1.6 'Nunito', sans-serif;
    color: ${props => props.theme['base-text']};
    text-overflow: ellipsis;
    
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  &:hover {
   box-shadow: 0 0 0 2px ${props => props.theme['base-label']};
  }
`

export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  text-align: start;

  & h3 {
    font: 700 1.25rem/1.6 'Nunito', sans-serif;
    color: ${props => props.theme['base-title']};
  }

  & span {
    white-space: nowrap;
    font: 400 .825rem/1.6 'Nunito', sans-serif;
    color: ${props => props.theme['base-span']};
  }
`