import React from 'react';
import { StyleSheet } from 'react-native';
import AButton, {
  ButtonProps as AButtonProps,
} from 'antd-mobile-rn/lib/button/index.native';

export interface ButtonProps extends AButtonProps {
  children: React.ReactNode;
}

const Button = ({ children, ...rest }: ButtonProps) => (
  <AButton style={styles.primary} {...rest}>
    {children}
  </AButton>
);

const styles = StyleSheet.create({
  primary: {
    backgroundColor: 'black',
    color: 'white',
    borderWidth: 0,
  },
});

export default Button;
