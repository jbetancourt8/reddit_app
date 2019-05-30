import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, WebView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 50
  },
  header: {
    height: 80
  }
});

class WebViewScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Button title='Go Back' onPress={() => this.props.navigation.goBack()} />
        </View>
        <View style={{ flex: 1 }}>
          <WebView source={{ uri: this.props.navigation.state.params.uri }} />
        </View>
      </View>
    )
  }
}

export default WebViewScreen; 