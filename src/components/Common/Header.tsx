import { FC } from 'react'
import styled from 'styled-components'
import { Wrapper } from '../../GlobalStyles'
import Logo from './Logo'
import Menu from './Menu'

const HeaderStyled = styled.div`
  position: fixed;
  width: 100%;
  background-color: var(--box-color);
  box-shadow: var(--shadow-default);
  padding: 15px 0;
  z-index: 1000;
  & .wrapper {
    display: grid;
    grid-template-columns: min-content min-content;
    justify-content: space-between;
    align-items: center;
  }
`
const Header : FC = () => {
  return (
    <HeaderStyled>
      <Wrapper className="wrapper">
        <Logo/>
        <Menu/>
      </Wrapper>
    </HeaderStyled>
  )
}

export default Header
