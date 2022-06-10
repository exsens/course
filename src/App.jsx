import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { initializedApp } from "./store/app/app-thunk";
import { selectInitialized } from "./store/app/app-selectors";
import { selectIsAuth } from "./store/auth/auth-select";


import Preloader from "./components/preloader/preloader";
import Container from "./components/common/container/container"
import Header from "./layout/header/header";
import Sidebar from "./layout/sidebar/sidebar";
import Content from "./layout/content/content";
import Footer from "./layout/footer/footer";
import Flex from "./components/flex/flex";

const App = () => {
  const dispatch = useDispatch(); 
  const initialized = useSelector(selectInitialized);
  const isAuth = useSelector(selectIsAuth)
  
  useEffect(
    function initialApp() {
      dispatch(initializedApp())
    },
    [isAuth, dispatch]
  );

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
};

export default App;
