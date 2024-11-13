import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background:  ${props => props.theme['base-background']};
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: grayscale;
}

:focus {
  outline: 0;
  box-shadow: 0 0 0 2px ${props => props.theme['blue']};
}

a {
  display: flex;
  gap: .5rem;
  align-items: center;
  max-width: fit-content;
  
  text-decoration: none;
  font: 700 0.75rem/1.3 "Nunito", sans-serif;
  color: ${props => props.theme['blue']};
  border-bottom: 0 solid black;
  
  transition: all .3s ease; 
  cursor: pointer;
  
  & svg {
    fill: ${props => props.theme['blue']};
    margin-bottom: 4px;
  }
  
  &:hover {
    border-bottom: 1px solid ${props => props.theme['blue']};
  }
}

input[type='text'] {
  padding: .75rem 1rem;
  border: 1px solid ${props => props.theme['base-border']};
  border-radius: 6px;
  
  font: 400 1rem/1.6 'Nunito', sans-serif;
  color: ${props => props.theme['base-text']};

  background: ${props => props.theme['base-background']};

  &::placeholder {
    color: ${props => props.theme['base-label']};
  }
}
`