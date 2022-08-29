import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout';
import { useFetchCurrentUserQuery } from 'redux/authAPI';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRout';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/authSelectors';

const ContactsView = lazy(() => import('../views/ContactsView/ContactsView'));
const RegisterView = lazy(() => import('../views/RegisterView/RegisterView'));
const LoginView = lazy(() => import('../views/LoginView/LoginView'));

export const App = () => {
  const token = useSelector(authSelectors.getToken);
  useFetchCurrentUserQuery(null, { skip: !token });

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PrivateRoute>
              <ContactsView />
            </PrivateRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute restricted>
              <RegisterView />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute restricted>
              <LoginView />
            </PublicRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
