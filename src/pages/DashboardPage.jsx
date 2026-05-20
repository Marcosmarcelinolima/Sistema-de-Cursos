import { useNavigate } from 'react-router-dom'

function getGreeting() {
  const hour = new Date().getHours()
  if (hour >= 5 && hour < 12) return 'Bom dia'
  if (hour >= 12 && hour < 18) return 'Boa tarde'
  return 'Boa noite'
}

function getFormattedDate() {
  const now = new Date()
  return now.toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const cursos = [
  {
    id: 1,
    badge: 'Em progresso',
    title: 'Front-end',
    description: 'Aula 2 - Conceitos de desenvolvimento Front-end e Git + GitHub',
    progress: 65,
  },
  {
    id: 2,
    badge: 'Em progresso',
    title: 'UX Design',
    description: 'Aula 3 - Usabilidade',
    progress: 34,
  },
]

const stats = [
  { badge: 'Tempo de estudo', value: '12h 45m', description: 'Esta semana' },
  { badge: 'Tarefas pendentes', value: '2', description: '' },
  { badge: 'Discussão com a IA', value: '8', description: 'Tópicos ativos' },
]

export default function DashboardPage() {
  const navigate = useNavigate()

  return (
    <div className="dashboard">
      <header className="menu">
        <div className="menu__body">
          <h1 className="menu__title">
            Academia <span>Portal do aluno</span>
          </h1>
          <nav className="menu__links">
            <span className="menu__item menu__item--active">Painel</span>
            <span className="menu__item">Disciplinas</span>
            <span className="menu__item">Tutor IA</span>
            <span className="menu__item" onClick={() => navigate('/login')}>
              Sair
            </span>
          </nav>
        </div>
      </header>

      <div className="dashboard__container">
        <div className="welcome">
          <h2>{getGreeting()}, João</h2>
          <p>{getFormattedDate()}</p>
          <p>
            Bem-vindo de volta à sua sessão de estudos focado. Você tem 2 tarefas
            para essa semana e está atualmente adiantado em seu cronograma de
            leitura.
          </p>
        </div>

        <div className="card__group_cursos">
          {cursos.map(curso => (
            <div className="card" key={curso.id}>
              <div className="card__body">
                <span className="card__badge">{curso.badge}</span>
                <h3 className="card__title">{curso.title}</h3>
                <p className="card__description">{curso.description}</p>
                <div className="card__progress">
                  <div style={{ width: `${curso.progress}%` }}>{curso.progress}%</div>
                </div>
              </div>
              <button className="card__button">Retomar estudo</button>
            </div>
          ))}
        </div>

        <div className="card__group">
          {stats.map((s, i) => (
            <div className="card" key={i}>
              <div className="card__body">
                <span className="card__badge">{s.badge}</span>
                <h3 className="card__title">{s.value}</h3>
                <p className="card__description">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
