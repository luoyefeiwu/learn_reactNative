import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';

export default class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
    };
    //标题
    this.title = this.props.title;
    this.url = this.props.url;
    this.fetchData = this.fetchData.bind(this);
  }

  componentWillMount() {
    this.fetchData();
  }
  fetchData() {
    let url = this.url;
    fetch(url)
      .then(res => res.json())
      .then(res => {
        listData: res.subjects;
      });
  }

  renderTopicItem = ({item}) => {};

  render() {
    return <Text>11</Text>;
  }
}
