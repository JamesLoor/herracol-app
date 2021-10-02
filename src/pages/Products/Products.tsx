import { useState } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components'
import MenuProducts from '../../components/Product/MenuProducts'
import ProductList from '../../components/Product/ProductList'
import Search from '../../components/Product/Search'
import { Section, Wrapper } from '../../GlobalStyles'
import menupoint from '../../static/icons/menu-point.svg'


const ProductsStyled = styled.div`
  section {
    padding: 20px 0;
  }
  .products-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    .menu-point {
      width: 25px;
      height: 25px;
      cursor: pointer;
    }
    .products-toolbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }
  }
`
const Products = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { category }: any = useParams()
  // console.log(category ?? 'todo')
  const handleMenuProducts = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <ProductsStyled>
      <Section className="products">
        <Wrapper>
          <div className="products-container">
            <MenuProducts isOpen={isMenuOpen} handleMenu={setIsMenuOpen}/>
            <div className="products-toolbar">
              <img className="menu-point" src={menupoint} alt="Menu categorias" onClick={handleMenuProducts}/>
              <Search/>
            </div>
            <ProductList/>
          </div>
        </Wrapper>
      </Section>
    </ProductsStyled>
  )
}

export default Products
