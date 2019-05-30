import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, WebView } from 'react-native';

import Thumbnail from '../Thumbnail/Thumbnail';
import Date from '../Date/Date';
import Title from '../Title/Title';
import Arthur from '../Author/Author';
import Score from '../Score/Score';
import Comments from '../Comments/Comments';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 10
  },
  titleBox: {
    flex: 1, 
    flexDirection: 'column',
    padding: 10,
  },
  authorBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

class RenderItem extends Component {
 render() {
    return (
      <TouchableOpacity style={styles.container} 
        onPress={() => this.props.navigation.navigate('WebViewScreen', {uri: this.props.item.url})}>
        <Thumbnail thumbnail={this.props.item.thumbnail}/>

        <View style={styles.titleBox}>

          <Date date={this.props.item.created}/>
          <Title title={this.props.item.title}/>

          <View style={styles.authorBox}>
            <Arthur author={this.props.item.author}/>
            <Score score={this.props.item.score}/>
            <Comments comments={this.props.item.num_comments}/>
          </View>

        </View>

      </TouchableOpacity>
    )
  }
}

export default RenderItem; 