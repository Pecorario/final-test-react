import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '@pages/Login';
import { Footer } from '@components/Footer';
import { ResetPassword } from '@pages/ResetPassword';
import { Registration } from '@pages/Registration';
import { Home } from '@pages/Home';

import { GlobalStyle } from './styles/global';
import { NewBet } from '@pages/NewBet';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/home" element={<Home />} />
          <Route path="/new-bet" element={<NewBet />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
