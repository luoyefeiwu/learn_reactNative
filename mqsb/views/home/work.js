import React, {Component} from 'react';
import {View, Image, KeyboardAvoidingView} from 'react-native';
import {Input, Text, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View
          style={{
            backgroundColor: '#ff3333',
            height: 60,
            marginTop: 10,
            marginLeft: 10,
            marginRight: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 6,
          }}>
          <Icon
            name="list"
            size={20}
            color={'white'}
            style={{marginLeft: 10, flex: 1}}
          />
          <Text style={{fontSize: 16, color: 'white', flex: 9}}>
            上报违规和签到
          </Text>
          <Icon
            name="angle-right"
            size={20}
            color={'white'}
            style={{flex: 1}}
          />
        </View>
        <View
          style={{
            backgroundColor: '#3894ff',
            height: 60,
            marginTop: 10,
            marginLeft: 10,
            marginRight: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 6,
          }}>
          <Icon
            name="list"
            size={20}
            color={'white'}
            style={{marginLeft: 10, flex: 1}}
          />
          <Text style={{fontSize: 16, color: 'white', flex: 9}}>
            责任单位管理
          </Text>
          <Icon
            name="angle-right"
            size={20}
            color={'white'}
            style={{flex: 1}}
          />
        </View>
        <View
          style={{
            backgroundColor: '#00ccff',
            height: 60,
            marginTop: 10,
            marginLeft: 10,
            marginRight: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 6,
          }}>
          <Icon
            name="list"
            size={20}
            color={'white'}
            style={{marginLeft: 10, flex: 1}}
          />
          <Text style={{fontSize: 16, color: 'white', flex: 8}}>我的排班</Text>
          <Icon
            name="angle-right"
            size={20}
            color={'white'}
            style={{flex: 1}}
          />
        </View>
      </View>
    );
  }
}
