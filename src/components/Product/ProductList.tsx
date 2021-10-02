import { useEffect } from 'react'
import styled from 'styled-components'
import useProduct from '../../hooks/useProduct'
import Product from './Product'

const ProductListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: 360px;
  justify-content: space-evenly;
  align-items: center;
  grid-gap: 20px;
`
const ProductList = () => {
  const { productList, productListByName, getProductList } = useProduct()
  const isProductListEmpty = !productList.length
  const list = productListByName.length > 0 ? productListByName : productList
  useEffect(() => {
    getProductList()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ProductListStyled>
      {isProductListEmpty ? (
        <p className="patientListEmpty">Cargando ...</p>
      ) : (
        list.map(({ id, name, description, img }:any) => {
          return (
            <Product key={id} img={img} name={name} description={description}/>
          )
        })
      )}
    </ProductListStyled>
  )
}

export default ProductList
