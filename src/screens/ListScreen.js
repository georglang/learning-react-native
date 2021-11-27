import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'friend1', age: 10 },
    { name: 'friend2', age: 20 },
    { name: 'friend3', age: 30 },
    { name: 'friend4', age: 40 },
    { name: 'friend5', age: 50 },
    { name: 'friend6', age: 60 },
    { name: 'friend7', age: 70 },
    { name: 'friend8', age: 80 },
    { name: 'friend9', age: 90 },
  ];
  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} | {item.age}{' '}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
