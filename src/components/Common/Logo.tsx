import styled from 'styled-components'

const LogoStyled = styled.div`
  user-select: none;
  letter-spacing: 1px;
  span {
    font-size: 20px;
    font-weight: 600;
  }
`
const Logo = () => {
  return (
    <LogoStyled>
      <span>Herracol</span>
    </LogoStyled>
  )
}

export default Logo
