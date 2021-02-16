import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';

import Logo from '../../components/Logo';
import Button from '../../components/Button';

import { WelcomePageProps } from '../../navigator/types';

export default function AuthScreen({ navigation }: WelcomePageProps) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bg}
        source={require('../../../images/welcome-bg.jpg')}>
        <View style={styles.content}>
          <View>
            <View style={styles.logoWrapper}>
              <Logo size="large" />
            </View>
          </View>

          <View>
            <Button
              type="primary"
              onClick={() => navigation.navigate('Register')}>
              Sign Up
            </Button>
            <View>
              <Text style={styles.bottomText}>
                Already have an account?{' '}
                <Text
                  style={styles.link}
                  onPress={() => navigation.navigate('Login')}>
                  Login
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  bg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 30,
    marginTop: 100,
    justifyContent: 'space-between',
  },
  textWrapper: {
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
    marginVertical: 10,
  },
  bottomText: {
    marginTop: 30,
    color: 'white',
    fontWeight: '500',
    fontSize: 19,
  },
  link: {
    textDecorationLine: 'underline',
    color: 'silver',
  },
});
