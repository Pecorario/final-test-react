import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '@pages/Login';
import { ResetPassword } from '@pages/ResetPassword';
import { Registration } from '@pages/Registration';
import { Home } from '@pages/Home';
import { GlobalStyle } from './styles/global';
import { NewBet } from '@pages/NewBet';
import { NotFoundPage } from '@components/NotFoundPage';

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
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
