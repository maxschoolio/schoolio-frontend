import { Button as StyledButton } from './Button.styled';
import { MouseEventHandler, PropsWithChildren } from 'react';

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
  disabled?: boolean;
}

export const Button = ({
  children,
  loading = false,
  disabled,
  ...rest
}: PropsWithChildren<ButtonProps>) => (
  <StyledButton {...rest} disabled={disabled || loading}>
    {loading ? 'Loading...' : children}
  </StyledButton>
);
