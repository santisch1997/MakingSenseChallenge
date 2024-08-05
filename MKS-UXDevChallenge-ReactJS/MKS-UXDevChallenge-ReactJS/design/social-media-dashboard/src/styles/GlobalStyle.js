import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    body {
      padding: 10px;
    }
  }

  @media (max-width: 480px) {
    body {
      padding: 5px;
    }
  }
`;

export default GlobalStyle;

