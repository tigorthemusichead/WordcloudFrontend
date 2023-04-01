import React, {useEffect} from 'react';
import './styles/App.sass';
import {Route, Routes} from "react-router-dom";
import {Layout} from "./layout/layout";
import {Home} from "./pages/home/home";
import CONSTANTS from "./app-constants";
import {Upload} from "./pages/upload/upload";
import {Tutorial} from "./pages/tutorial/tutorial";
import {About} from "./pages/about/about";
import {Contact} from "./pages/contact/contact";

function App() {
  //const { appStore } = useStores();

  return (
      <>
          <Layout>
              <Routes>
                  <Route path={CONSTANTS.ROUTES.HOME} element={<Home />} />
                  {/*<Route path={CONSTANTS.ROUTES.UPLOAD} element={<Upload />} />*/}
                  <Route path={CONSTANTS.ROUTES.TUTORIAL} element={<Tutorial />} />
                  <Route path={CONSTANTS.ROUTES.ABOUT} element={<About />} />
                  {/*<Route path={CONSTANTS.ROUTES.CONTACT} element={<Contact />} />*/}
              </Routes>
          </Layout>
          <div className={"background"}>
              <div/>
              <img src="/images/background.jpg" alt="" />
          </div>
    </>
  )
}

export default App;
