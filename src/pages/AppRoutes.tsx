import { SignIn, SignUp } from '@/pages/Auth';
import { Home } from '@/pages/Home';
import { Routes, Route, Navigate } from 'react-router-dom';

export enum AppRoute {
  Home = '/',
  SignIn = 'sign-in',
  SignUp = 'sign-up',
}

export const AppRoutes = () => (
  <Routes>
    <Route path="*" element={<Navigate to={AppRoute.SignIn} />} />
    <Route path={AppRoute.Home} element={<Home />} />
    <Route path={AppRoute.SignIn} element={<SignIn />} />
    <Route path={AppRoute.SignUp} element={<SignUp />} />
  </Routes>
);
