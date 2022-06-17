import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import Container from './components/common/container/container'
import Flex from './components/flex/flex'
import Preloader from './components/preloader/preloader'
import Content from './layout/content/content'
import Footer from './layout/footer/footer'
import Header from './layout/header/header'
import Sidebar from './layout/sidebar/sidebar'
import app from './mobx/app'
import auth from './mobx/auth'

const App = observer(() => {
  const { initializedApp, initialized } = app
  const { isAuth } = auth

  useEffect(
    function initialApp() {
      initializedApp()
    },
    [isAuth, initializedApp],
  )

  if (!initialized) {
    return <Preloader />
  }

  return (
    <>
      <Container>
        <Header />
        <Flex>
          <Sidebar />
          <Content />
        </Flex>
        <Footer />
      </Container>
    </>
  )
})

export default App
