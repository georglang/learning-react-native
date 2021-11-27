import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Georg'
  return (
    <View>
      <Text style={styles.textStyle}>Getting started </Text>
      <Text style={styles.textStyle2}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  textStyle2: {
    fontSize: 20
  }
});

export default ComponentsScreen;
