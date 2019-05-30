import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import RenderItem from '../../components/RenderItem/RenderItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 50
  },
  separator: {
    borderBottomColor: '#d1d0d4',
    borderBottomWidth: 1
  },
});

class Main extends Component {
  state= {
    data: null,
  };

  componentDidMount() {
    fetch('https://api.reddit.com/r/pics/hot.json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({ data: responseJson.data.children });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  _renderItem = ({ item }) => {
    return (
      <RenderItem item={item.data} navigation={this.props.navigation} />
    )
  }

  _keyExtractor = (item, index) => item + index;

  renderList() {
    return (
      <FlatList
        data={this.state.data}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    )
  }

  renderLoading() {
    return (
      <Text style={{ textAlign: 'center' }}>Loading...</Text>
    )
  }

  render() {
    const isLoading = (this.state.data != null) ? this.renderList() : this.renderLoading();

    return (
      <View style={styles.container}>
        {isLoading}
      </View>
    )
  }
}

export default Main; 