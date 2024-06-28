import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>,
)
