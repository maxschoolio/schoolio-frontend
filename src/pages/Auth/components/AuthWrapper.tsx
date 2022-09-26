import { BaseSyntheticEvent, PropsWithChildren } from 'react';
import styled from 'styled-components';

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

interface AuthWrapperProps {
  onSubmit: (e: BaseSyntheticEvent) => void;
}

export const AuthWrapper = ({
  children,
  onSubmit,
}: PropsWithChildren<AuthWrapperProps>) => (
  <Container>
    <Form onSubmit={onSubmit}>{children}</Form>
  </Container>
);
