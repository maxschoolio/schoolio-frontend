import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { AuthWrapper } from '@/pages/Auth/components/AuthWrapper';
import { joiResolver } from '@hookform/resolvers/joi';
import * as Joi from 'joi';
import { useForm } from 'react-hook-form';

interface SignUpSchema {
  username: string;
  password: string;
  confirmPassword: string;
}

const schema = Joi.object<SignUpSchema>({
  username: Joi.string().required(),
  password: Joi.string().required(),
  confirmPassword: Joi.string().required().valid(Joi.ref('password')),
});

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: joiResolver(schema),
  });

  const onSubmit = () => null;

  return (
    <AuthWrapper onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Username"
        error={errors.username?.message}
        {...register('username')}
      />
      <Input
        label="Password"
        error={errors.password?.message}
        type="password"
        {...register('password')}
      />
      <Input
        label="Confirm password"
        error={errors.confirmPassword?.message}
        type="password"
        {...register('confirmPassword')}
      />
      <Button>Sign up</Button>
    </AuthWrapper>
  );
};
