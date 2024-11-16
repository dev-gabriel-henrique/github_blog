import styled from "styled-components";

export const PerfilContainer = styled.div`
display: flex;
align-items: start;
gap: 2rem;

padding: 2rem 2.5rem;
margin: -5.5rem auto 0;

background: ${props => props.theme['base-profile']};

position: relative;
z-index: 2;

width: 54rem;

border-radius: 10px;
`

export const PerfilInfos = styled.div`
display: flex;
flex-direction: column;
gap: .5rem;

 & h2 {
  font: 700 1.5rem/1.3 'Nunito', sans-serif;
  color: ${props => props.theme['base-title']};
 }

 & p {
  font: 400 1rem/1.6 'Nunito', sans-serif;
  color: ${props => props.theme['base-text']};
  margin-bottom: 1rem;
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

