import React from 'react';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Container from '../../components/Container';

import { RegisterPageProps } from '../../navigator/types';

export default function AuthScreen({}: RegisterPageProps) {
  return (
    <Container>
      <Input name="email" placeholder="Email" />
      <Input name="userName" placeholder="User Name" />
      <Input name="password" placeholder="Password" />
      <Button type="primary">Sign Up</Button>
    </Container>
  );
}
