import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Logo from '../../components/Logo';
import Button from '../../components/Button';

export default function AuthScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Logo size="large" />
      </View>

      <Button type="primary">Sign In</Button>
      <View>
        <Text>Forgot Password?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20,
  },
});
