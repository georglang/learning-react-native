import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';

// General rule: Anytime we have some shared state that needs to be distributed
// among mutliple different components
// --> Generally we create state variables in the most parent component that
// needs to either read or change a state value

// If a child component needs to read a state value, the parent can pass it down as a prop

// If a child component needs to change a state value in a parent component
// --> then we going to pass a callback function down to the children as a prop
// inside the callback the child can invoke that function and make a change
// to the state value in the parent component

// Square Screen needs to read the three different state values

const SquareScreen = () => {

  const COLOR_INCREMENT = 10;



  return (
    <View>
      <ColorCounter
        onIncrease={() => }
        onDecrease={() => }
        color="Red"
      />
      <ColorCounter
        onIncrease={() => }
        onDecrease={() => }
        color="Green"
      />
      <ColorCounter
        onIncrease={() => }
        onDecrease={() => }
        color="Blue"
      />

      <View
        style={{ height: 200, width: 200, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
