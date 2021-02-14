import React from 'react';
import { Image, StyleSheet } from 'react-native';

export interface LogoProps {
  size?: 'small' | 'middle' | 'large';
}

const Logo = ({ size = 'middle' }: LogoProps) => {
  return (
    <Image style={styles[size]} source={require('../../images/logo.png')} />
  );
};

const styles = StyleSheet.create({
  small: {
    width: 40,
    height: 40,
  },
  middle: {
    width: 100,
    height: 100,
  },
  large: {
    width: 150,
    height: 150,
  },
});

export default Logo;
