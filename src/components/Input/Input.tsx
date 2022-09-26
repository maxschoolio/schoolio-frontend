import { Input as StyledInput, Container } from './Input.styled';
import { forwardRef, HTMLProps, useId } from 'react';

type InputProps = HTMLProps<HTMLInputElement> & {
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, error = '', placeholder = '...', as: _, ...rest }, ref) => {
    const generatedId = useId();

    const inputId = generatedId ?? id;

    return (
      <Container>
        <label htmlFor={inputId}>{label}</label>
        <StyledInput
          {...rest}
          ref={ref}
          placeholder={placeholder}
          id={inputId}
        />
        <p style={{ color: 'red' }}>{error}</p>
      </Container>
    );
  },
);
