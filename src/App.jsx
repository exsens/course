import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { dark, Grommet } from 'grommet'
import Container from './components/common/container/container'
import Flex from './components/flex/flex'
import Preloader from './components/preloader/preloader'
import Content from './layout/content/content'
import Footer from './layout/footer/footer'
import Header from './layout/header/header'
import Sidebar from './layout/sidebar/sidebar'
import app from './mobx/app'
import auth from './mobx/auth'
import { theme } from './theme/theme'

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
    <Grommet theme={theme} themeMode="light">
      <Container>
        <Header />
        <Flex>
          <Sidebar />
          <Content />
        </Flex>
        <Footer />
      </Container>
    </Grommet>
  )
})

export default App
