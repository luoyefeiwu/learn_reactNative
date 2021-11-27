import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  KeyboardAvoidingView,
} from 'react-native';

import styles from './style';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  render() {
    return (
      <View style={styles.item}>
        <View style={styles.header}>
          <Image
            source={require('../../resources/loginbj.jpg')}
            style={styles.itemImage}
          />
          <View style={styles.title}>
            <Text style={styles.area}>海淀区</Text>
            <Text style={styles.system}>门前三包移动巡更系统</Text>
          </View>
        </View>
        <KeyboardAvoidingView>
          <View style={styles.body}>
            <View style={styles.user}>
              <Text>
                <Ionicons
                  name={'md-person'}
                  size={20}
                  color={'rgb(46, 171, 242)'}
                />
              </Text>
              <TextInput
                style={{flex: 1}}
                onChangeText={value => this.setState({username: value})}
              />
            </View>
            <View style={styles.password}>
              <Text>
                <Ionicons
                  name={'md-lock-closed-outline'}
                  size={20}
                  color={'rgb(46, 171, 242)'}
                />
              </Text>
              <TextInput
                style={{flex: 1}}
                onChangeText={value => this.setState({comment: value})}
              />
            </View>
            <View>
              <Button
                // onPress={onPressLearnMore}
                title="登录"
                color="rgb(46, 171, 242)"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
