import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// Estilo global
import GlobalStyle from './styles/globals'

// Provider para onter as propriedades
import { ThemeProvider } from 'styled-components'
import theme from '../src/styles/Theme/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
