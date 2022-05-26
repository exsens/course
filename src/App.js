import Container from './components/container/container.jsx';
import Header from './layout/header/header';
import Sidebar from './layout/sidebar/sidebar.jsx';
import Content from './layout/content/content';
import Footer from './layout/footer/footer';
import Flex from './components/flex/flex.jsx';

const App = () => {
  return (
    <>
      <Container>
        <Header />
        <Flex>
          <Sidebar/>
          <Content/>
        </Flex>
        <Footer />
      </Container>
    </>
  );
}

export default App;
