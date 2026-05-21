import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import LoginPage from './pages/LoginPage'
import CadastroPage from './pages/CadastroPage'
import FimCadastroPage from './pages/FimCadastroPage'
import DashboardPage from './pages/DashboardPage'
import { UsuarioProvider } from './context/UsuarioContext'

function App() {
  return (
    <BrowserRouter>
      <UsuarioProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cadastro" element={<CadastroPage />} />
          <Route path="/cadastro-finalizado" element={<FimCadastroPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </UsuarioProvider>
    </BrowserRouter>
  )
}

export default App
