import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ImageDetail from '../components/ImageDetail.js';

const ImageScreen = () => {
  return (
    <View>
      <Text>Image Screen</Text>
      <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} score={9} />
      <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} score={10}/>
      <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} score={11}/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
