import {
  H1,
  H2,
  H3,
  Container,
  Header,
  Main,
  DataSpace,
  Frame1,
  Frame2,
  Display,
  Section1,
  Section2,
  Section3,
  DataMart,
  Form,
  Footer,
} from './style'

import Slider from '../../utils/Slide'

import IlustraBanner from '../../assets/ilustraBanner.svg'
import Icon01 from '../../assets/icon01.svg'
import Icon02 from '../../assets/icon02.svg'
import Icon03 from '../../assets/icon03.svg'
import Button from '../../utils/Button'
import Mart from '../../assets/mars.svg'
import BackgroundImage from '../../assets/starts.svg'
import Lines from '../../assets/lines.svg'
import PlanetBlue from '../../assets/planetBlue.svg'
import LogoWhite from '../../assets/logo-white.svg'
import LogoBlack from '../../assets/logo-black.svg'
import IconTicket from '../../assets/icon-ticket.svg'
import Rocket from '../../assets/rocket-illustra.svg'
import Smoke from '../../assets/smoke-footer.svg'
import Social from '../../assets/social-icons.svg'

function Home() {
  console.log(Button)
  return (
    <Container>
      <Header><img src={LogoBlack} alt="logo" /></Header>
      <Main img={BackgroundImage}>
        <Frame1>
          <div>
            <H2>Finalmente é possível!</H2>
            <Display>Sua jornada para Marte começa aqui</Display>
            <H3>
              A primeira viagem para Marte estará disponivel apartir do dia
              12/03/2028. Inscreva-se em nossa lista de espera.
            </H3>
            <Button>Inscreva-se agora</Button>
          </div>

          <img src={IlustraBanner} alt="astronautas em marte" />
        </Frame1>

        <DataSpace>
          <div>
            <img src={Icon01} alt="" />
            <p>Foguetes com a mais alta tecnologia e conforto.</p>
          </div>

          <div>
            <img src={Icon02} alt="" />
            <p>Mais de 100 missões consecutivas realizadas com sucesso.</p>
          </div>

          <div>
            <img src={Icon03} alt="" />
            <p>Experiencia única e exclusiva.</p>
          </div>
        </DataSpace>
      </Main>

      <Section1 img={Lines}>
        <Frame2>
          <img src={Mart} alt="" />

          <div>
            <H2> Por que Marte?</H2>
            <H1>Sobre o planeta vermelho</H1>
            <p>
              A uma distância média de 140 milhões de milhas, Marte é um dos
              vizinhos habitáveis mais próximos da Terra. Marte está mais ou
              menos a metade da distância da Terra do Sol, então ainda tem luz
              solar decente. Está um pouco frio, mas podemos esquentar. Sua
              atmosfera é composta principalmente de CO2 com um pouco de
              nitrogênio e argônio e alguns outros oligoelementos, o que
              significa que podemos cultivar plantas em Marte apenas comprimindo
              a atmosfera. A gravidade em Marte é cerca de 38% da da Terra,
              então você seria capaz de levantar coisas pesadas e dar voltas.
              Além disso, o dia está notavelmente próximo ao da Terra.
              <p className="tabela">
                <img src={PlanetBlue} alt="" /> Diâmetro - 6.791 km / 4.220 mi
              </p>
              <p className="tabela">
                <img src={PlanetBlue} alt="" /> Duração do dia - 24 horas 37
                minutos
              </p>
              <p className="tabela">
                <img src={PlanetBlue} alt="" /> Força da gravidade - 38% da
                Terra
              </p>
              <p className="tabela">
                <img src={PlanetBlue} alt="" /> Distância Média da Terra -
                225Mkm / 140Mmi
              </p>
            </p>
          </div>
        </Frame2>

        <DataMart>
          <div className="div-data-mart">
            <img src={LogoWhite} alt="" />
            <H1>O caminho para tornar a humanidade multiplanetária</H1>
            <a href="">Inscreva-se agora</a>
          </div>

          <Slider />
        </DataMart>
      </Section1>

      <Section2 img={BackgroundImage}>
        <Form>
          <img src={IconTicket} alt="" />
          <div className="form-inputs">
            <H2>Garanta sua vaga para a primeira viagem</H2>
            <p>Preencha os campos abaixo para entrar na lista de espera</p>

            <div className="inputs">
              <label htmlFor="">Nome</label>
              <input type="text" placeholder="Digite seu nome" />
            </div>

            <div className="inputs">
              <label htmlFor="">E-mail</label>
              <input type="email" placeholder="Digite seu e-mail" />
            </div>

            <div className="inputs">
              <label htmlFor="">Telefone</label>
              <input type="tel" placeholder="Digite seu telefone" />
            </div>

            <div className="check">
              <input type="checkbox" className="box" />
              <label htmlFor="">Concordo em receber comunicações</label>
            </div>

            <Button>Garantir minha vaga</Button>
          </div>
        </Form>
        <img src={Rocket} alt="" />
      </Section2>

      <Section3>
        <img src={Smoke} alt="" />
      </Section3>

      <Footer>
        <div>
          <img src={LogoWhite} alt="logo" />
        </div>
        <div>
          <img src={Social} alt="icones de midias sociais" />
        </div>
        <div className='links'>
          <a href="">Início</a>
          <a href="">Sobre nós</a>
          <a href="">Missões</a>
          <a href="">Contato</a>
        </div>
      </Footer>
    </Container>
  )
}

export default Home
