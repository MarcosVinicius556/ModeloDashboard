import Header from '../Header/';
import { Container, Content } from './PageContainer.style';

function PageContainer({ children }) {
  return (
    <Container>
        <Header />
        <Content>
            {children}
        </Content>
    </Container>
  )
}

export default PageContainer;