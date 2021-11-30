import React, {Component} from 'react';
// import {View, Image, KeyboardAvoidingView} from 'react-native';
import {Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {View, StyleSheet, FlatList} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default class Scheduling extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  render() {
    return (
      <View>
        <View>
          <Calendar
            markedDates={{
              '2012-05-16': {
                selected: true,
                marked: true,
                selectedColor: 'blue',
              },
              '2012-05-17': {marked: true},
              '2012-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
              '2012-05-19': {disabled: true, disableTouchEvent: true},
            }}
          />
        </View>
        <View style={styles.title}>
          <View style={styles.titleWidth}>
            <Text style={styles.titleText}>签到时间</Text>
          </View>
          <View style={styles.titleWidth}>
            <Text style={styles.titleText}>责任单位</Text>
          </View>
          <View style={styles.titleWidth}>
            <Text style={styles.titleText}>位置</Text>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.left}>
            <FlatList
              data={this.state.list}
              keyExtractor={(item, index) => item.id}
              // refreshing={this.props.refreshing}
              // onRefresh={this.handleListRefresh}
              renderItem={({item}) => {
                return (
                  <View style={styles.item}>
                    <View style={styles.info}>
                      <Text style={styles.title}>{item.title}</Text>
                    </View>
                  </View>
                );
              }}
            />
          </View>
          <View style={styles.right}>
            <Text>右侧1</Text>
            <Text>右侧2</Text>
          </View>
        </View>
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
