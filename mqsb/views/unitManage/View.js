import React, {Component} from 'react';
// import {View, Image, KeyboardAvoidingView} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {View, StyleSheet, FlatList, Text, Dimensions} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

// 责任单位列表
export default class UnitManage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: '#efefff4',
          minHeight: Dimensions.get('window').height,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
            marginBottom: 10,
          }}>
          <Input
            placeholder="搜索"
            leftIcon={<Icon name="search" size={16} color="grey" />}
            leftIconContainerStyle={{marginLeft: 5}}
            inputStyle={{
              fontSize: 15,
            }}
            inputContainerStyle={{
              height: 30,
              borderRadius: 5,
              backgroundColor: '#fff',
              borderBottomColor: '#fff',
            }}
            containerStyle={{
              height: 30,
              flex: 9,
            }}
          />
          <Text style={{flex: 1, color: 'green', marginRight: 10}}>取消</Text>
        </View>
        <View
          style={{
            paddingTop: 10,
            marginBottom: 10,
            borderTopWidth: 0.5,
            borderTopColor: 'grey',
          }}>
          <Text style={{marginLeft: 10}}>为您找到相关结果23条</Text>
        </View>
        <View>
          <FlatList
            data={this.state.list}
            keyExtractor={(item, index) => item.id}
            // refreshing={this.props.refreshing}
            // onRefresh={this.handleListRefresh}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    backgroundColor: '#fff',
                    marginLeft: 10,
                    marginBottom: 10,
                    marginRight: 10,
                    borderRadius: 5,
                    paddingLeft: 10,
                  }}>
                  <View
                    style={{
                      borderBottomWidth: 0.5,
                      borderBottomColor: 'grey',
                      height: 40,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Icon name="building" size={16} color="#2AC9FF" />
                    <Text style={{marginLeft: 8}}>门店名称: {item.title}</Text>
                  </View>
                  <Text>注册名称:{item.title}</Text>
                  <Text>责任人:{item.title}</Text>
                  <Text>地址:{item.title}</Text>
                  <Text>负责人电话:{item.title}</Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    );
  }

  componentDidMount() {
    let arr = [];
    for (let i = 0; i < 30; i++) {
      arr.push({id: i, title: '上地大厦' + i});
    }
    this.setState({
      list: arr,
    });
  }
}
const styles = StyleSheet.create({});
