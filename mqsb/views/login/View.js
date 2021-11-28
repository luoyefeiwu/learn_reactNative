import React, {Component} from 'react';
import {View, Image, KeyboardAvoidingView} from 'react-native';
import {Input, Text, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import qs from 'qs';
import styles from './style';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '15313881006',
      password: '1qaz@WSX,',
      secureTextEntry: true,
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
          <View style={[styles.body]}>
            <Input
              placeholder="请输入用户名"
              leftIcon={
                <Icon
                  name="user"
                  size={20}
                  color="rgb(46, 171, 242)"
                  style={{marginRight: 5, marginLeft: 5}}
                />
              }
              inputContainerStyle={{
                borderColor: 'rgb(46, 171, 242)',
                borderWidth: 1,
                borderRadius: 50,
              }}
              containerStyle={{
                paddingLeft: 0,
                height: 50,
              }}
              value={this.state.username}
              onChangeText={value => this.setState({username: value})}
              maxLength={11}
            />
            <Input
              placeholder="请输入密码"
              leftIcon={
                <Icon
                  name="lock"
                  size={20}
                  color="rgb(46, 171, 242)"
                  style={{marginRight: 5, marginLeft: 5}}
                />
              }
              inputContainerStyle={{
                borderColor: 'rgb(46, 171, 242)',
                borderWidth: 1,
                borderRadius: 50,
              }}
              containerStyle={{
                paddingLeft: 0,
                height: 50,
                marginTop: 10,
              }}
              secureTextEntry={this.state.secureTextEntry}
              value={this.state.password}
              onChangeText={value => this.setState({password: value})}
              maxLength={11}
              rightIcon={
                <Icon
                  name={this.state.secureTextEntry ? 'eye' : 'eye-slash'}
                  size={20}
                  color="rgb(46, 171, 242)"
                  style={{marginRight: 5, marginLeft: 5}}
                  onPress={() =>
                    this.setState({
                      secureTextEntry: !this.state.secureTextEntry,
                    })
                  }
                />
              }
            />
            <Button
              title="立即登录"
              onPress={this.login.bind(this)}
              containerStyle={{
                borderColor: 'rgb(46, 171, 242)',
                borderWidth: 1,
                borderRadius: 50,
                marginTop: 10,
              }}
            />
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
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then(res => {
        if (res.status === 200) {
          alert('登录成功');
        } else {
          alert('用户名或密码错误');
        }
      })
      .catch(error => {
        console.error(error);
      });
  }
}
