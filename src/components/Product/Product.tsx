import styled from 'styled-components'

interface ProductProps {
  key: string;
  img: string;
  name: string;
  description: string;
}

const ProductStyled = styled.div`
  display: grid;
  grid-template-rows: 270px 90px;
  background: var(--box-color);
  box-shadow: var(--shadow-default);
  border-radius: var(--border-radius-default);
  overflow: hidden;
  height: 100%;
  .product-image {
    display: block;
    width: 100%;
    height: 100%;
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .product-details {
    padding: 15px;
    .product-name {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 5px;
      line-height: 1rem;
    }
    .product-description {
      font-size: 12.5px;
    }
  }
`
const Product = ({ img, name, description } : ProductProps) => {
  return (
    <ProductStyled>
      <div className="product-image">
        <img src={img} alt={name} />
      </div>

      <div className="product-details">
        <p className="product-name">{name}</p>
        <p className="product-description">{description}</p>
      </div>
    </ProductStyled>
  )
}

export default Product
