import React from 'react';
import { View, StyleSheet } from 'react-native';

export interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
});

export default Container;
