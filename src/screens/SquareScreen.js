import React, { useReducer } from 'react';
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
const COLOR_INCREMENT = 10;

// by convention the reducer function is defined outside of
// our component.
// argument 1 is our current state object
// argument 2 is the object that describes how we´re supposed to change
// our state object --> it describes the update we want to make
// By convention the second argument is called 'action'

const reducer = (state, action) => {
  // reminder what the arguments are look like
  // state  === { red: number, green: number, blue: number }
  // action === { type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15 }

  switch (action.type) {
    case 'change_red':
      // never going to to state.red = state.red - 15
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case 'change_green':
      return state.green + action.payload > 255 || state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case 'change_blue':
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const initialStateObject = {
    red: 0,
    green: 0,
    blue: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialStateObject);
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })}
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
