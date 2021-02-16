import React from 'react';
import AButton, {
  ButtonProps as AButtonProps,
} from 'antd-mobile-rn/lib/button/index.native';

export interface ButtonProps extends AButtonProps {
  children: React.ReactNode;
}

const Button = ({ children, ...rest }: ButtonProps) => (
  <AButton {...rest}>{children}</AButton>
);

export default Button;
