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
    width: 120,
    height: 120,
  },
  large: {
    width: 240,
    height: 240,
  },
});

export default Logo;
