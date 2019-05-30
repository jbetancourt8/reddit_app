import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  commentsStyle: {
  
  }
});

const Comments = ({ comments }) => (
  <View>
    <Text>comments:</Text>
    <Text>{comments}</Text>
  </View>
);

export default Comments; 