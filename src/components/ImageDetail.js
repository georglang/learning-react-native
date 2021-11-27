import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const ImageDetail = ({ imageSource, score, title }) => {
  return (
    <View>
      <Text>Image Detail</Text>
      <Text>{title}</Text>
      <Image source={imageSource} />
      <Text>Image Score - {score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
