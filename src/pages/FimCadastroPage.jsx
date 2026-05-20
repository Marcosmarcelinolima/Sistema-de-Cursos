import { Link } from 'react-router-dom'

export default function FimCadastroPage() {
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
        <form className="login-form">
          <h1>Cadastro Finalizado!</h1>
          <p>
            Parabéns! Seu cadastro foi concluído com sucesso.
          </p>
          <h4>Clique no botão para voltar à tela de login!</h4>

          <Link to="/login">
            <button type="button">Voltar ao Login</button>
          </Link>
        </form>
      </div>
    </div>
  )
}
