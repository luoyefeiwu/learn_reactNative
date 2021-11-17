import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image, Text, View} from 'react-native';
import Wiki from '../wiki/View';
import Hotlist from '../hotlist/View';

const Tab = createBottomTabNavigator();

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }
  render() {
    const homeImg = require('../../resource/images/home.png');
    const likeImg = require('../../resource/images/like.png');
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            if (route.name === 'Wiki') {
              return <Image source={homeImg} style={{width: 20, height: 20}} />;
            } else if (route.name === 'Settings') {
              return <Image source={likeImg} style={{width: 20, height: 20}} />;
            }
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          //headerStyle: {height: 0},
        })}>
        <Tab.Screen
          name="Wiki"
          // component={() => <Wiki navigate={this.props.navigation.navigate} />}
          options={{tabBarBadge: 3, title: '首页'}}>
          {props => <Wiki {...props} />}
        </Tab.Screen>
        <Tab.Screen
          name="Settings"
          component={Hotlist}
          options={{
            tabBarBadge: 4,
            title: '设置',
          }}
        />
      </Tab.Navigator>
    );
  }
}
