import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
  Login,
  ResetPassword,
  Registration,
  Home,
  NewBet,
  Profile
} from '@pages/index';
import { NotFoundPage } from '@components/index';

import { GlobalStyle } from './styles/global';

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
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
