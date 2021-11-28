import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  KeyboardAvoidingView,
} from 'react-native';
import {Input} from 'react-native-elements';
import qs from 'qs';

import styles from './style';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '15313881007',
      password: '1qaz@WSX,',
    };
    //this.login = this.login.bind(this);
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
                value={this.state.username}
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
                value={this.state.password}
                textContentType={'password'}
                onChangeText={value => this.setState({password: value})}
              />
            </View>
            <View>
              <Button
                onPress={this.login.bind(this)}
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

  login() {
    fetch('http://mqsb.bjhdnet.com:8082/sso/verificationUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: qs.stringify({
        username: this.props.username,
        password: this.props.password,
      }),
    })
      .then(res => {
        alert(JSON.stringify(res));
      })
      .catch(error => {
        console.error(error);
      });
  }
}
