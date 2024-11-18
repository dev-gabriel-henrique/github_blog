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