import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  console.log('Home Screen', navigation);
  return (
    <View>
      <Text style={styles.text}>Daheim</Text>
      <Button onPress={() => navigation.navigate('Components')} title="Go to components demo" />
      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>Go to list demo</Text>
      </TouchableOpacity>

      <Button onPress={() => navigation.navigate('Images')} title="To Image Screen" />
      <Button onPress={() => navigation.navigate('Counter')} title="To Counters" />
      <Button onPress={() => navigation.navigate('Color')} title="To Color" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;