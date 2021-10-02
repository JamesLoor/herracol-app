import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import menu from '../../static/icons/menu.svg'
import close from '../../static/icons/close.svg'

interface MenuProps {
  isMenuOpen: boolean;
}

const MenuStyled = styled.div<MenuProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  .menu-icon-open {
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'none' : 'block')};
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  .menu-icon-close {
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'block' : 'none')};
    position: absolute;
    right: 15px;
    top: 15px;
    width: 25px;
    height: 25px;
    z-index: 901;
    cursor: pointer;
  }

  .menu-list {
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
    background: var(--box-color);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    z-index: 900;
  }

  @media (min-width: 768px) {
    .menu-icon-open {
      display: none;
    }
    .menu-list {
      display: grid;
      grid-auto-flow: column;
      gap: 30px;
      position: static;
      height: min-content;
    }
  }
`
const Menu = () => {
  const history = useHistory()
  const [isOpen, setIsOpen] = useState(false)
  const handleMenuOpen = () => setIsOpen(!isOpen)
  const handleMenuClose = () => setIsOpen(false)

  history.listen(location => {
    if (location === history.location) {
      if(!isOpen) {
        setIsOpen(false)
      }
    }
  })

  return (
    <MenuStyled isMenuOpen={isOpen}>
      <img onClick={handleMenuOpen} className="menu-icon-open" src={menu} alt="Menu hamburguesa" />
      <img onClick={handleMenuClose} className="menu-icon-close" src={close} alt="Cerrar" />

      <ul className="menu-list">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/nosotros">Nosotros</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/contacto">Contáctanos</Link></li>
      </ul>
    </MenuStyled>
  )
}

export default Menu
