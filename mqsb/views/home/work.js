import React, {Component} from 'react';
import {
  View,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Input, Text, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.list, {backgroundColor: '#ff3333'}]}>
          <Icon name="list" size={20} color={'white'} style={styles.leftIcon} />
          <Text style={styles.content}>上报违规和签到</Text>
          <Icon
            name="angle-right"
            size={20}
            color={'white'}
            style={styles.rightIcon}
          />
        </View>

        <View style={[styles.list, {backgroundColor: '#3894ff'}]}>
          <Icon
            name="building"
            size={20}
            color={'white'}
            style={styles.leftIcon}
          />
          <Text style={styles.content}>责任单位管理</Text>
          <Icon
            name="angle-right"
            size={20}
            color={'white'}
            style={styles.rightIcon}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            alert(111);
          }}>
          <View style={[styles.list, {backgroundColor: '#00ccff'}]}>
            <Icon
              name="calendar"
              size={20}
              color={'white'}
              style={styles.leftIcon}
            />
            <Text style={styles.content}>我的排班</Text>
            <Icon
              name="angle-right"
              size={20}
              color={'white'}
              style={styles.rightIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
