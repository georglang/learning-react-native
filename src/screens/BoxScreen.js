import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>BoxScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
  },
  textStyle: {
    borderWidth: 1,
    borderColor: 'red',
    paddingTop: 10,
    marginVertical: 20,
    marginHorizontal: 20
  },
});

export default BoxScreen;
