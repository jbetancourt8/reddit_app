import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  scoreStyle: {
    height: 160, 
    width: 160
  }
});

const Score = ({ score }) => (
  <View>
    <Text>votes:</Text>
    <Text>{ score }</Text>
  </View>
);

export default Score; 