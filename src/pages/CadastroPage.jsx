import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function CadastroPage() {
  const [cpf, setCpf] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    navigate('/cadastro-finalizado')
  }

  return (
    <div className="container">
      <div className="lado_esquerdo">
        <p>
          Educação não é um aprendizado de fatos, mas sim um processo de
          transformação da mente.
          <span>Albert Einstein</span>
        </p>
      </div>

      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1>Cadastre-se</h1>
          <p>
            Passo 1 de 2<br />
            Por favor, insira seu CPF para prosseguir
          </p>
          <br />

          <label htmlFor="cpf">CPF</label>
          <input
            type="text"
            id="cpf"
            placeholder="000.000.000-00"
            value={cpf}
            onChange={e => setCpf(e.target.value)}
            required
          />

          <button type="submit">Prosseguir</button>

          <div className="cadastre_se_aqui">
            <p>
              Já tem uma conta?{' '}
              <Link to="/login">Faça login aqui</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
