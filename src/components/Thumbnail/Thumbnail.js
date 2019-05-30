import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  thumbnailStyle: {
    height: 120, 
    width: 120,
  },
  imageBorder: {
    height: 125, 
    width: 125, 
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const Thumbnail = ({ thumbnail }) => (
  <View style={styles.imageBorder}>
    <Image 
      style={styles.thumbnailStyle}
      source={{ uri: thumbnail}}
    />
  </View>
);

export default Thumbnail; 