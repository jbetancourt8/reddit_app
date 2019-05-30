import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  authorStyle: {

  }
});

const Author = ({ author }) => (
  <View>
    <Text>by:</Text>
    <Text>{ author}</Text>
  </View>
);

export default Author; 