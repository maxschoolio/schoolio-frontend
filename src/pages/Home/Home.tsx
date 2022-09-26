import { AuthContext } from '@/context/auth/auth';
import { AppRoute } from '@/pages/AppRoutes';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Logout = styled.a`
  text-decoration: underline;
  color: blue;
  cursor: pointer;
`;

export const Home = () => {
  const { user, signOut } = useContext(AuthContext);

  if (user) {
    return (
      <>
        Hello, {user.username}.{' '}
        <Logout onClick={() => signOut()}>Logout</Logout>
      </>
    );
  }

  return (
    <>
      You are not <Link to={AppRoute.SignIn}>log in</Link>
    </>
  );
};
