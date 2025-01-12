import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { AuthPage } from './pages/AuthPage';
import { Header } from './components/Header';
import { UserProvider } from './components/UserContext';

export function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Header text="Todo App" />}>
          <Route index element={<Home />} />
          <Route path="/sign-up" element={<AuthPage mode="sign-up" />} />
          <Route path="/sign-in" element={<AuthPage mode="sign-in" />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}
