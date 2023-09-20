import Header from '../Header/';
import { Container, Content, TitleContainer } from './PageContainer.style';

function PageContainer({ children, title, subtitle }) {
  return (
    <Container>
        <Header />
        <Content>
          <TitleContainer>
              {title && <h2>{title}</h2>}
              {subtitle && <h6>{subtitle}</h6>}
          </TitleContainer>
            {children}
        </Content>
    </Container>
  )
}

export default PageContainer;