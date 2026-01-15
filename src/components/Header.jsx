import './Header.css'
import { useHamburgerMenu } from '../hooks/useHamburgerMenu'

const Header = () => {
  const { open, toggleMenu } = useHamburgerMenu()

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/img/logo.jpg" alt="Clínica Veterinaria José Granda" />
          <span>Clínica Veterinaria José Granda</span>
        </div>

        <nav className={`nav ${open ? 'open' : ''}`}>
          <a href="#servicios">Servicios</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#faq">Preguntas Frecuentes</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
      </div>
    </header>
  )
}

export default Header
