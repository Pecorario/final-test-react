import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Login } from '@pages/Login';
import { Footer } from '@components/Footer';
// import { ResetPassword } from '@pages/ResetPassword';
// import { Registration } from '@pages/Registration';

import { ContainerLogged } from './style';
import { GlobalStyle } from './styles/global';
// import { TitleAside } from '@components/TitleAside';
import { Header } from '@components/Header';
import { Home } from '@pages/Home';

function App() {
  // const location = useLocation();
  // const path = location.pathname;

  // const authPath =
  //   path === '/' || path === '/reset-password' || '/registration';
  // const loggedPath = path === '/home' || path === '/cart';

  // console.log('Path: ', path);

  return (
    <>
      <BrowserRouter>
        {/* {authPath && (
          <ContainerAuth>
            <TitleAside />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/registration" element={<Registration />} />
            </Routes>
          </ContainerAuth>
        )} */}
        {/* 
        {loggedPath && (
          <> */}
        <Header />
        <ContainerLogged>
          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes>
        </ContainerLogged>
        {/* </>
        )} */}
      </BrowserRouter>
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
