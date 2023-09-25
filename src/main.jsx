import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './styles/Global.jsx'
import { ThemeProvider } from 'styled-components'
import { them } from './styles/Theme.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={them}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
