import styled from 'styled-components'
import Button from '../../components/Common/Button'
import { Section, Subtitle, Title, TitleSecundary, TitleTertiary, Wrapper } from '../../GlobalStyles'
import experience from '../../static/icons/experience.svg'
import banner from '../../static/images/banner.jpg'

const HomeStyled = styled.div`
  .banner {
    display: flex;
    position: relative;
    align-items: center;
    width: 100%;
    height: calc(100vh - 55px);
    padding: 0;
    color: var(--font-color);
    background-color: var(--test-image-color);
    /* color: var(--font-image-color); */
    /* background-color: #000; */
    h1, p {
      position: relative;
    }

    &::before {
      content: "";
      /* background-image: url(${banner}); */
      background-size: cover;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      opacity: 0.75;
    }
  }

  .welcome {
    .welcome-container {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 20px;

      .welcome-message {
        margin-bottom: 20px;
      }
      .experience {
        padding: 20px;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 10px;
        box-shadow: var(--shadow-default);
        border-radius: var(--border-radius-default);
        text-align: center;
      }

      .welcome-right {
        width: 100%;
        display: grid;
        grid-template-rows: 1fr min-content;
        min-height: 450px;
        background-color: var(--test-image-color);
        box-shadow: var(--shadow-default);
        border-radius: var(--border-radius-default);
        padding: 20px;

        .message {
          margin-top: 25px;
          align-self: center;
        }
      }
    }
  }
`

const Home = () => {
  return (
    <HomeStyled>
      <Section className="banner">
        <Wrapper>
          <Title>Herramientas de alta calidad</Title>
          <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</Subtitle>
        </Wrapper>
      </Section>

      <Section className="welcome">
        <Wrapper>
          <div className="welcome-container">
            <div className="welcome-left">
              <TitleSecundary>Bienvenidos</TitleSecundary>
              <div className="welcome-message">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis quos fugiat non hic nostrum nulla quasi? Cumque, accusamus quisquam reiciendis.</p>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>

              <div className="experience">
                <div className="experience-icon">
                  <img src={experience} alt="Experiencia" />
                </div>

                <div className="experience-message">
                  <p>Más de 20 años de experiencia en la venta de herramientas de la mejor calidad del mercado</p>
                </div>

                <Button />
              </div>
            </div>

            <div className="welcome-right">
              <div className="message">
                <TitleTertiary>Contruye con las mejores herramientas</TitleTertiary>
                <p>I am proud to represent our company as quality of our work is high-class.</p>
              </div>

              <div className="message-firm">
                <p><span>John Doe</span> - Gerente</p>
              </div>
            </div>
          </div>
        </Wrapper>
      </Section>
    </HomeStyled>
  )
}

export default Home
