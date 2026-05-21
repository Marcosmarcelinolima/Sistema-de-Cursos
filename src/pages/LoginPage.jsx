import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useUsuario } from '../context/UsuarioContext'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setUsuario } = useUsuario()
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    // Navega para o dashboard ao clicar em Entrar
    setUsuario({ email, password })
    navigate('/dashboard')
  }

  return (
    <div className="container">
      <div className="lado_esquerdo">
        <p>
          "Educação não é o <br />aprendizado de fatos, mas <br />
          o treinamento da mente para pensar."
          <span>Albert Einstein</span>
        </p>
      </div>

      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1>Bem-vindo!</h1>
          <p>Por favor, insira suas credenciais para acessar seu painel acadêmico.</p>

          <label htmlFor="username">Insira seu nome de usuário:</label>
          <input
            type="text"
            name="username"
            value={email}
            placeholder='Username:'
            onChange={e => setEmail(e.target.value)}
            required
          />

          <div className="linha-senha">
            <label htmlFor="password">Senha:</label>
            <a href="#">Esqueceu?</a>
          </div>
          <input
            type="password"
            id="password"
            name="password"
            placeholder='Senha:'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <button type="submit">Entrar</button>

          <div className="cadastre_se_aqui">
            <p>
              Você não tem uma conta?{' '}
              <Link to="/cadastro">Cadastre-se aqui</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
