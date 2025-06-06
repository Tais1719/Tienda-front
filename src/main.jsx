import { Elements } from '@stripe/react-stripe-js'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'

import stripePromise from './config/stripeConfig'
import AppProvider from './hooks'
import { Router } from './Routes'
import GlobalStyles from './styles/globalStyle'
import  { standardTheme } from './styles/themes/standard'






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ThemeProvider theme={ standardTheme }>
    <AppProvider>

      <BrowserRouter>
      <Router/>
             
      </BrowserRouter>
    <GlobalStyles />
    <Elements stripe={stripePromise}>
    <ToastContainer autoClose={2000} theme="colored" />
    </Elements>
    </AppProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
