import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PackagesPage from './pages/PackagesPage'
import ContactPage from './pages/ContactPage'
import Test from './Test'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/packages" element={<PackagesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  )
}

export default App
