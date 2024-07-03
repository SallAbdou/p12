import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import './styles/index.scss'
import server from './utils/server.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// eslint-disable-next-line no-undef
console.log(`URL_API: ${URL_API}`)
console.log('import.meta.env.MODE:', import.meta.env.MODE)

if (import.meta.env.MODE === 'development') {
  server()
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Header />
    <Routes>
      <Route path="/:id" element={<Home></Home>}></Route>
    </Routes>
    <Footer />
  </Router>
)
