import React, { useState } from 'react';
// useState is a Hook
// Hook:
// A hook is a function that adds some new functionality to a function component

import { View, StyleSheet, Text, Button } from 'react-native';

// function component
const CounterScreen = () => {
  // useState(0) -> passing in the default value
  // [counter, setCounter] -> counter is the piece of state which is going
  // to change over time
  // Anytime we want to change the piece of state the  variable and will not
  // be updated directly (don´t modify a state variable directly)
  // If we want update the state we use the second variable that comes back when
  // we call useState() (here setCounter())

  // counter + 1 doesn´t modify counter adding +1 doesn´t change the counter variable
  // it uses the old counter value adding 1 and then returns a new value that does
  // not get assigned back to counter

  // !!! Important
  // Anytime we call the setCounter() function React is going to automatically
  // re - run the entire function component (CounterScreen) and everything inside
  // is executed again
  // but the second time it reruns the value of counter is updated


  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button title="Increase" onPress={() => setCounter(counter + 1)} />
      <Button title="Decrease" onPress={() => setCounter(counter - 1)} />
      <Text style={styles.counterStyle}>{counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  counterStyle: {
    fontSize: 40
  }
});

export default CounterScreen;
