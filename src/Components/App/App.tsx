import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { MainPage } from '../../Pages/MainPage';
import { RootState } from '../../store/store';
import { AddInputForm } from '../AddInputForm';
import { Layout } from '../Layout';
import { PrivateRoute } from '../PrivateRouter';
import './App.css';

function App() {
  const getUser = () => (state: RootState) => state.squeezer.user
  const user = useAppSelector(getUser())
  const isLogIn = user ? true : false

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AddInputForm />} />
          <Route path='statistics'
            element={
              <PrivateRoute authorizationStatus={isLogIn}>
                <MainPage />
              </PrivateRoute>
            } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { App }
