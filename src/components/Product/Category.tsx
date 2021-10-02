import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface CategoryProps {
  to: string;
  handleMenu: Function;
  children: any;
}

const CategoryStyled = styled.div`
  /*  */
`
const Category = ({ to, handleMenu, children } : CategoryProps) => {
  const handleClick = () => handleMenu(false)
  return (
    <CategoryStyled>
      <Link to={to} onClick={handleClick}>{children}</Link>
    </CategoryStyled>
  )
}

export default Category
