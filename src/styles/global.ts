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
  border: none;
}

input[type='text'] {
  padding: .75rem 1rem;
  border: 1px solid ${props => props.theme['base-border']};
  border-radius: 6px;
  
  font: 400 1rem/1.6 'Nunito', sans-serif;
  color: ${props => props.theme['base-text']};

  width: 100%;
  background-color: ${props => props.theme['base-input']};

  &::placeholder {
    color: ${props => props.theme['base-label']};
  }
}

& ul[role='list'] {
  list-style: none;
}

& a {
  text-decoration: none;
  
  &:active {
    border-radius: 10px;
  }
}

& h1 {
  text-align: center;
  color: ${props => props.theme['base-title']};
}
`