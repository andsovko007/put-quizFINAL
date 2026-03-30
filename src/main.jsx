import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AboutPage from './AboutPage.jsx'

function RootRouter() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'

  if (path === '/about') {
    return <AboutPage />
  }

  return <App />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RootRouter />
  </React.StrictMode>,
)
