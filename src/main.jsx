import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import UserPage from './pages/UserPage.jsx';
import './styles/index.scss'
import server from './utils/server.js'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

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
      <Route path='/' element={<Navigate to="/12" />} />
      <Route path="/:id" element={<UserPage />} />
    </Routes>
    <Footer />
  </Router>
)
