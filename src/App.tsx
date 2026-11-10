import logo from './assets/logo.svg'
import arrow from './assets/arrow.svg'
import brightness from './assets/brightness.svg'
import persona from './assets/persona.png'

export default function App() {
  return (
    <>
      <header className="header">
        <a href="#top" className="header__logo" aria-label="Olha Zorina">
          <img src={logo} alt="" />
        </a>
        <nav className="nav" aria-label="Головна навігація">
          <a href="#ux-ui">UX/UI Дизайн</a>
          <a href="#content">Контент</a>
          <a href="#contact">Контакти</a>
        </nav>
        <div className="header__tools">
          <button type="button" className="lang" aria-label="Мова">
            Укр
            <img src={arrow} alt="" width={36} height={36} />
          </button>
          <button type="button" className="mode" aria-label="Змінити тему">
            <img src={brightness} alt="" width={32} height={32} />
          </button>
          <a href="#contact" className="btn btn--outline">
            Написати
          </a>
        </div>
      </header>

      <main id="top" className="hero">
        <div className="hero__photo">
          <img src={persona} alt="Olha Zorina" />
        </div>
        <div className="hero__descr">
          <div className="hero__text">
            <div className="hero__name">
              <p className="hero__title">Візуальна дизайнерка</p>
              <h1>Olha Zorina</h1>
            </div>
            <p className="hero__lead">
              Сайт і візуальний контент для вашого бізнесу в єдиному стилі від
              одного виконавця.
            </p>
          </div>
          <a href="#contact" className="btn btn--filled">
            Зв'язатися
          </a>
        </div>
      </main>
    </>
  )
}
