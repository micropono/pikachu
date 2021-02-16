import React from 'react';
import { View, Text } from 'react-native';

import Button from '../../components/Button';
import Input from '../../components/Input';
import Container from '../../components/Container';

import { LoginPageProps } from '../../navigator/types';

export default function LoginScreen({ navigation }: LoginPageProps) {
  const _goToForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <Container>
      <Input name="email" placeholder="Email" />
      <Input name="password" placeholder="Password" />
      <Button type="primary">Login</Button>
      <View>
        <Text onPress={_goToForgotPassword}>Forgot Password?</Text>
      </View>
    </Container>
  );
}
