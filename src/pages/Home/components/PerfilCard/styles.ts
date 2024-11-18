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
justify-content: space-between;

 & p {
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

