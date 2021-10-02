import styled from 'styled-components'
import Header from './Header'

const LayoutStyled = styled.div`
  .app {
    padding-top: 60px;
  }
`
const Layout = ({ children } : any)=> {
  return (
    <LayoutStyled>
      <Header/>
      <div className="app">
        {children}
      </div>
    </LayoutStyled>
  )
}

export default Layout
