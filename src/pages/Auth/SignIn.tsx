import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { AuthContext } from '@/context/auth/auth';
import { AppRoute } from '@/pages/AppRoutes';
import { AuthWrapper } from '@/pages/Auth/components/AuthWrapper';
import { useSignInMutation } from '@graphql/generated/types';
import { joiResolver } from '@hookform/resolvers/joi';
import * as Joi from 'joi';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface SignInSchema {
  username: string;
  password: string;
}

const schema = Joi.object<SignInSchema>({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchema>({
    resolver: joiResolver(schema),
  });

  const { signInSuccess, user } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(AppRoute.Home);
    }
  }, [navigate, user]);

  const onSubmit = ({ username, password }: SignInSchema) =>
    signInMutation({
      variables: {
        input: {
          username,
          password,
        },
      },
    });

  const [signInMutation, { loading }] = useSignInMutation({
    onCompleted: (data) => signInSuccess(data.signIn),
  });

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
      <Button loading={loading}>Sign in</Button>
    </AuthWrapper>
  );
};
