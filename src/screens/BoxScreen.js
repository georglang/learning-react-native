import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Box Object Model

// The width / height of an element + the space around it
// padding, border, margin
// Use this to affect the positioning of a single element

// --------------------------------------------------------

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

// --------------------------------------------------------------------

// Position

// How a single element gets laid out inside of a parent
// Use this to override Box Object Model + Flex Box

// relative:
// By default every element that we place has a position property with
// the value 'relative', that means just do things as usual

// absolute:
// makes a given element to be completely ignored by it´s siblings
// the element than obeys some flex box rules set by the parent

// Properties: Top, Right, Bottom, Left
// are going to add in a little bit of extra spacing
// between one element and a sibling
// no other siblings will be affected
// showing a portion of child 2 ontop of child 3

// Tipps:

// If you want that some element completley fill out
// it´s parent container

// 1. set element to position: 'absolute'
// 2. set top, right, bottom and left: 0.
// shorthand for this is ...StyleSheet.absoluteFillObject

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.child1Style}></View>
      <View style={styles.child2Style}></View>
      <View style={styles.child3Style}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  child1Style: {
    backgroundColor: 'red',
    height: 50,
    width: 50,
  },
  child2Style: {
    backgroundColor: 'green',
    height: 50,
    width: 50,
    marginTop: 80
  },
  child3Style: {
    backgroundColor: 'purple',
    height: 50,
    width: 50,
  },
});

export default BoxScreen;
