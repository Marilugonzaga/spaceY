import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './style/globalStyle'
import Home from './pages/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Home />
  </React.StrictMode>
)
