import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  dateStyle: {
    fontSize: 15,
    textAlign: 'right',
    paddingBottom: 5
  }
});


class Date extends Component {
  render() {
    const { date } = this.props;

    return (
      <Text style={styles.dateStyle}>{date}</Text>
    );
  }
}

export default Date; 