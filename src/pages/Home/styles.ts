import styled from "styled-components";

export const HomeContainer = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const PubContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 2rem;
margin-block: 3rem;
`

export const FetchContainer = styled.div`
display: flex;
flex-direction: column;
gap: .75rem;

width: 54rem;

margin-top: 4.5rem;

& div {
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h3 {
    font: 700 1.125rem/1.6 'Nunito', sans-serif;
    color: ${props => props.theme['base-subtitle']};
  }

  & span {
    font: 400 .875rem/1.6 'Nunito', sans-serif;
    color: ${props => props.theme['base-span']};
  }
}
`