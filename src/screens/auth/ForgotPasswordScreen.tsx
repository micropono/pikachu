import React from 'react';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Container from '../../components/Container';

export default function AuthScreen() {
  return (
    <Container>
      <Input name="email" placeholder="Email" />
      <Button type="primary">Reset Password</Button>
    </Container>
  );
}
