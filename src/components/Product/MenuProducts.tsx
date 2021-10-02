import { TitleTertiary } from '../../GlobalStyles'
import { categories } from '../../data/Categories.data'
import styled from 'styled-components'
import Category from './Category'
import close from '../../static/icons/close.svg'

interface MenuProductsProps {
  isOpen: boolean;
  handleMenu: Function;
}

interface MenuProductsInterface {
  isMenuOpen: boolean;
}

const MenuProductsStyled = styled.div<MenuProductsInterface>`
  display: ${({ isMenuOpen }) => (isMenuOpen ? 'block' : 'none')};
  position: absolute;
  width: 280px;
  top: 60px;
  bottom: 0;
  left: 0;
  background-color: var(--box-color);
  box-shadow: var(--shadow-default);
  padding: 20px;
  .menu-header {
    display: grid;
    grid-template-columns: min-content min-content;
    justify-content: space-between;
    align-items: center;
  }
  .menu-products-icon-close {
    width: 15px;
    height: 15px;
    margin-bottom: 10px;
    cursor: pointer;
  }
`
const MenuProducts = ({ isOpen, handleMenu } : MenuProductsProps) => {
  const handleMenuClose = () => {
    handleMenu(false)
  }
  return (
    <MenuProductsStyled isMenuOpen={isOpen}>
        <div className="menu-header">
          <TitleTertiary>Categorias</TitleTertiary>
          <img src={close} className="menu-products-icon-close" alt="Menu cerrar" onClick={handleMenuClose}/>
        </div>
        <ul>
          {categories.map(({ id, name, url }) => {
            return (
              <li key={id}><Category to={url} handleMenu={handleMenu}>{name}</Category></li>
            )
          })}
        </ul>
    </MenuProductsStyled>
  )
}

export default MenuProducts
