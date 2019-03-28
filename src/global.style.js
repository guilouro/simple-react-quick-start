import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
        box-sizing: border-box;
    }

    body {
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
`

export default GlobalStyle
