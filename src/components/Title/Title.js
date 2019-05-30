import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 15, 
    paddingBottom: 5
  }
});

const Title = ({ title }) => (
  <Text style={styles.titleStyle}>{title}</Text>
);

export default Title; 