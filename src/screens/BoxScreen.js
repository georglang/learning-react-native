import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Flex Box

// Parent Properties:

// How some number of sibling elements get laid out inside a parent
// Use this to position multiple elements with a common parent

// Default is alignItems: 'stretch' on parent
// uses the whole horizontal space

// alignItems: 'flex-start' on parent
// uses the space on the left side depending on how
// long the content is

// alignItems: 'center' on parent
// alignItems: 'flex-end' on parent

// flexDirection: 'column' / ' row on parent
// how all the children are aligned inside

// justifyContent: on parent
// values:
// flex-start, flex-end, space-between, space-around

// can controll how the children lay themselves out
// when flexDirection: 'column' the content is aligned vertically
// when flexDirection: 'row' the content is aligned horizontally

// Child Properties:

// Flex

// Flex makes a child in a parent try to take up as much space as possible
// other value than 1
// e.g.
// child 1 and to get flex: 4
// child 3 get flex 2
// 4 + 4 + 2 = 10
// so 10 units total of space
// Children 1 and 2 get 40% each. Child 3 gets 20%

// alignSelf

// alignSelf essentially overrides the value of alignItems on the parent element
// Properties:
// flex-start, flex-end, center

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.child1Style}>Child 1</Text>
      <Text style={styles.child2Style}>Child 2 Child 2</Text>
      <Text style={styles.child3Style}>Child 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  child1Style: {
    borderWidth: 3,
    borderColor: 'red',
  },
  child2Style: {
    borderWidth: 3,
    borderColor: 'red',
    alignSelf: 'stretch',
  },
  child3Style: {
    borderWidth: 3,
    borderColor: 'red',
  },
});

export default BoxScreen;
