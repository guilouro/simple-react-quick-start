import React from 'react'
import { render } from 'react-dom'
import Main from './components/main'
import GlobalStyles from './global.style'

const App = () => (
  <>
    <GlobalStyles />
    <Main />
  </>
)

render(<App />, document.getElementById('main'))
