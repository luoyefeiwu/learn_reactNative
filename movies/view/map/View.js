import React, {Component} from 'react';
import {WebView} from 'react-native-webview';
import {StyleSheet} from 'react-native';

export default class Map extends Component {
  render() {
    return (
      <WebView source={{uri: 'https://m.baidu.com'}} style={styles.webview} />
    );
  }
}

const styles = StyleSheet.create({
  webview: {
    width: '100%',
    height: '100%',
  },
});
