import styled from "styled-components";

export const PerfilContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: start;
gap: 2rem;

padding: 2rem 2.5rem;
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

& > div {
  display: flex;
  gap: 2rem;

  & > img {
    width: 9.25rem;
    height: 9.25rem;
    object-fit: cover;
    border-radius: 8px;
  }
  
  & h2 {
   font: 700 1.5rem/1.3 'Nunito', sans-serif;
   color: ${props => props.theme['base-title']};
  }
}
`

export const PerfilInfos = styled.div`
display: flex;
flex-direction: column;

 & p {
  margin-top: .5rem;
  padding-bottom: 4rem;
  font: 400 1rem/1.6 'Nunito', sans-serif;
  color: ${props => props.theme['base-text']};
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

