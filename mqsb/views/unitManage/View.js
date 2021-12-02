import React, {Component} from 'react';
// import {View, Image, KeyboardAvoidingView} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {View, StyleSheet, FlatList, Text} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default class UnitManage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Input
          placeholder="请输入用户名"
          leftIcon={<Icon name="search" size={16} />}
          inputStyle={{
            fontSize: 16,
          }}
          inputContainerStyle={{
            height: 28,
          }}
          containerStyle={{
            marginTop: 20,
            height: 28,
          }}
        />
        <Text>22311111111</Text>
      </View>
    );
  }

  componentDidMount() {
    let arr = [];
    for (let i = 0; i < 30; i++) {
      arr.push({id: i, title: '2020-12-' + i});
    }
    this.setState({
      list: arr,
    });
  }
}
const styles = StyleSheet.create({
  title: {
    display: 'flex',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
    marginLeft: 2,
    marginRight: 2,
    backgroundColor: '#fff',
  },
  titleText: {
    textAlign: 'center',
  },
  titleWidth: {
    flex: 1,
  },
  content: {
    marginTop: 2,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    // minHeight: 500,
  },
  left: {
    flex: 1,
    borderRightColor: '#E0E0E0',
    borderRightWidth: 1,
  },
  right: {
    flex: 2,
  },
});
