import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { Routes } from './routes'
import theme from './styles/theme'
import GlobalStyles from './styles/global'
import { AuthenticatorProvider } from './hooks/auth'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyles/>

    <AuthenticatorProvider>
      <Routes />        
    </AuthenticatorProvider>

    </ThemeProvider>
  </React.StrictMode>,
)
