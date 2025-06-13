import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import Register from './pages/Register'
import AccountSettings from './pages/AccountSettings'

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<AccountSettings />} />
      </Routes>
    </div>
  )
}

export default App