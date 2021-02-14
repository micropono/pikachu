import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import InputItem, {
  InputItemProps,
} from 'antd-mobile-rn/lib/input-item/index.native';

export interface InputProps extends InputItemProps {
  label?: string;
}

const Input = ({ label, ...rest }: InputProps) => (
  <View style={styles.container}>
    {label && <Text style={styles.label}>{label}</Text>}
    <InputItem style={styles.input} {...rest} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontWeight: '600',
    fontSize: 17,
    marginBottom: 5,
    color: 'gray',
  },
  input: {
    // borderWidth: 0.5,
    // borderRadius: 4,
    marginLeft: 0,
    paddingHorizontal: 8,
    // borderColor: 'gray',
    borderBottomColor: 'gray',
  },
});

export default Input;
