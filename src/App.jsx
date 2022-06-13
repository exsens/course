import { observer } from "mobx-react-lite";

import app from "./mobx/app"
import auth from "./mobx/auth";

import { useEffect } from "react";

import Preloader from "./components/preloader/preloader";
import Container from "./components/common/container/container";
import Header from "./layout/header/header";
import Sidebar from "./layout/sidebar/sidebar";
import Content from "./layout/content/content";
import Footer from "./layout/footer/footer";
import Flex from "./components/flex/flex";
import Login from "./page/login/login";

const App = observer(() => {
  const { initializedApp, initialized } = app;
  const { isAuth } = auth;

  useEffect(function initialApp() {
    initializedApp();
  }, [isAuth, initializedApp]);

  if (!initialized) {
    return <Preloader />;
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
  );
})

export default App;
