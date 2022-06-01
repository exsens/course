import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { initializedApp } from "./store/app/app-actions.js";
import { selectInitialized } from "./store/app/app-selectors.js";

import Preloader from "./components/preloader/preloader.jsx";
import Container from "./components/container/container.jsx";
import Header from "./layout/header/header";
import Sidebar from "./layout/sidebar/sidebar.jsx";
import Content from "./layout/content/content";
import Footer from "./layout/footer/footer";
import Flex from "./components/flex/flex.jsx";

const App = () => {
  const dispatch = useDispatch();
  const initialized = useSelector(selectInitialized);
  
  useEffect(
    function initialApp() {
      dispatch(initializedApp())
    },
    [dispatch]
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
