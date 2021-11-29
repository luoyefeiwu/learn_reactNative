import React, {Component} from 'react';
// import {View, Image, KeyboardAvoidingView} from 'react-native';
import {Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {View} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default class Scheduling extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Calendar
          markedDates={{
            '2012-05-16': {selected: true, marked: true, selectedColor: 'blue'},
            '2012-05-17': {marked: true},
            '2012-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
            '2012-05-19': {disabled: true, disableTouchEvent: true},
          }}
        />
      </View>
    );
  }
}
