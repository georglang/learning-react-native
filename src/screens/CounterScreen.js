// !!! commented out because replaced by useReducer
// import React, { useState } from 'react';
// useState is a Hook
// Hook:
// A hook is a function that adds some new functionality to a function component

import React, { useReducer } from 'react';

import { View, StyleSheet, Text, Button } from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return state.count > 0 ? { ...state, count: state.count - action.payload } : state;
    default:
      return state;
  }
};

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

  // !!! commented out because replaced by useReducer
  // const [counter, setCounter] = useState(0);

  const initStateObject = { count: 0 };

  const [state, dispatch] = useReducer(reducer, initStateObject);
  const { count } = state;

  return (
    <View>
      <Button title="Increase" onPress={() => dispatch({ type: 'increment', payload: 10 })} />
      <Button title="Decrease" onPress={() => dispatch({ type: 'decrement', payload: 1 })} />
      <Text style={styles.counterStyle}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  counterStyle: {
    fontSize: 40,
  },
});

export default CounterScreen;
